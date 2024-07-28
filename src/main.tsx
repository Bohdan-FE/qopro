import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './app/app';
import { MemoryRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <MemoryRouter>
      <Provider store={store}>

        <App />

      </Provider>
    </MemoryRouter>
  </StrictMode>
);
