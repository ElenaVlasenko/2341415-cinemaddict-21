import AbstractStatefulView from '../framework/view/abstract-stateful-view';

function createSortTemplate() {

  return `<ul class="sort">
  <li><a href="#" class="sort__button">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button sort__button--active">Sort by rating</a></li>
</ul>`;
}

export default class SortView extends AbstractStatefulView {
  get template() {
    return createSortTemplate();
  }
}
