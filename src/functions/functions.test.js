import * as f from '../functions/functions';

it('dateFormatter correctly formats a timestamp', () => {
  const timestamp = '2018-05-30T16:59:13.000Z';
  const expectedOutput = 'May 30, 2018';
  expect(f.dateFormatter(timestamp)).toBe(expectedOutput);
});

it('bodyFormatter correctly formats a long body str', () => {
  const body = `'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.`;
  const expectedOutput =
    "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO.\n Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled.\n Although fish fraud is common early in the supply chain, most of it comes at the retail level.\n In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs.\n In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper.\n Especially brazen fish criminals have invented new types of fish entirely.\n In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species.\n Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish.\n Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.\n";
  expect(f.bodyFormatter(body)).toEqual(expectedOutput);
});

it('shortens any long headlines on the home page', () => {
  const str =
    'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals';
  const expectedOutput = 'JavaScript’s Apply, Call, and Bind Methods are...';
  expect(f.headlineFormatter(str)).toBe(expectedOutput);
});
