import ContainerView from './framework/view/container-view.js';
import MoviesModel, { EVENTS } from './models/movies-model.js';
import BoardPresenter from './presenters/board-presenter.js';
import MovieCardsPresenter from './presenters/movie-cards-presenter.js';
import { DISPLAYED_MOVIES_COUNT } from './const.js';

const mainElement = document.querySelector('.films-list__container');
const headerElement = document.querySelector('.header');
const popupElement = document.querySelector('.film-details');
const mainContainer = new ContainerView(mainElement);

const moviesModel = new MoviesModel({ displayedMoviesCount: DISPLAYED_MOVIES_COUNT });

const boardPresenter = new BoardPresenter({
  moviesModel,
  mainContainer,
  headerContainer: new ContainerView(headerElement),
  popupContainer: new ContainerView(popupElement)
});

const movieCardsPresenter = new MovieCardsPresenter({
  mainContainer,
  popupContainer: new ContainerView(popupElement),
  moviesModel
});

boardPresenter.run();
moviesModel
  .addObserver(EVENTS.DISPLAYED_MOVIES_ADDED, (movies) => movieCardsPresenter.onDisplayedMoviesAdded(movies))
  .init();

