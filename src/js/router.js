import Navigo from 'navigo';
import { loadHTML } from './restCompose';

// router config
const root = null;
const useHash = false;
const hash = '#!';
const router = new Navigo(root, useHash, hash);

router.on({
    'enroll': () => {  loadHTML('../pages/enroll/enroll.html', '.main'); },
    'enroll/customer-info': () => { loadHTML('../pages/enroll/customerInfo.html', '.main'); },
    'enroll/location-currency': () => { loadHTML('../pages/locationCurrency.html', '.main');}
});

// set default router
router.on(() => { loadHTML('../index.html', '.main'); });

// 404
router.notFound(()=>{ alert('not found'); });

router.resolve();