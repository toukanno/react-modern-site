export const planCatalog = [
  {
    slug: 'free',
    name: '無料版',
    href: 'https://memo-color.booth.pm/items/8061337',
    accent: 'plan-free',
    badge: 'First step',
    note: 'まず雰囲気と使い心地を試したい人向け。',
    audience: 'Markdown エディタの空気感を最初に確かめたい人',
    value: '基本の編集体験、プレビューのテンポ、見た目の相性を気軽に判断できる入口プラン。',
    bestFor: '最初の一本として、合うかどうかを短時間で見極めたいとき。',
    upgradePath: '気に入ったらベータ版で改善を追うか、製品版で日常利用に移れます。',
    ctaLabel: 'まず無料版を試す',
    ctaNote: '判断材料を集めるための最初の Booth 導線です。'
  },
  {
    slug: 'beta',
    name: 'ベータ版',
    href: 'https://memo-color.booth.pm/items/8061302',
    accent: 'plan-beta',
    badge: 'Early access',
    note: '新しい改善を早めに触りたい人向け。',
    audience: '更新の速さや改善の途中経過も含めて追いたい人',
    value: '個人開発の改善サイクルを早めに追える、中間的な温度感のプラン。',
    bestFor: '安定よりも新しい変化を先に触って確認したいとき。',
    upgradePath: '継続利用の軸が固まったら、製品版をメインに据える判断につなげやすい構成です。',
    ctaLabel: 'ベータ版を見に行く',
    ctaNote: '改善を先に追いたい人向けの Booth 導線です。'
  },
  {
    slug: 'pro',
    name: '製品版',
    href: 'https://memo-color.booth.pm/items/8061324',
    accent: 'plan-pro',
    badge: 'Main plan',
    note: 'RainbowMD をしっかり使いたい人向けの本命プラン。',
    audience: '日常の執筆環境として腰を据えて使いたい人',
    value: '無料で相性を確認したあとに、継続利用の本命として選びやすいメインプラン。',
    bestFor: '日常メモ、資料づくり、継続的な文書作成の道具として定着させたいとき。',
    upgradePath: '無料版やベータ版で納得できたあとに、そのまま本命として選べます。',
    ctaLabel: '製品版を選ぶ',
    ctaNote: '継続利用を前提にした Booth 導線です。'
  }
];

export const comparisonRows = [
  { key: 'audience', label: '向いている人' },
  { key: 'value', label: '受け取れる価値' },
  { key: 'bestFor', label: '選びどき' },
  { key: 'upgradePath', label: '次の進み方' }
];

export const planScenarios = [
  {
    title: 'まず試したい',
    description: '最初に操作感だけでも確認して、合うかどうかを低負担で判断したい。',
    planSlug: 'free'
  },
  {
    title: '改善を早く追いたい',
    description: '個人開発の進化を追いながら、新しい変化を先に触ってみたい。',
    planSlug: 'beta'
  },
  {
    title: '本格的に使いたい',
    description: '日常の執筆環境として据え、継続利用前提でしっかり選びたい。',
    planSlug: 'pro'
  }
];

export const planFaqs = [
  {
    question: 'どれから始めればいいですか？',
    answer: '迷ったら無料版からで十分です。まず操作感や見た目の相性を確認し、そのあと必要に応じてベータ版や製品版へ進めます。'
  },
  {
    question: '無料版から有料版へ進む前提でも問題ありませんか？',
    answer: '問題ありません。このサイト全体も、無料版で雰囲気を掴んでから次を選べる流れを前提にしています。'
  },
  {
    question: 'ベータ版は誰向けですか？',
    answer: '安定性よりも改善の速さや変化を先に追いたい人向けです。完成版を静かに使うより、更新の流れも含めて楽しみたい場合に合います。'
  }
];

export const purchaseReassurance = [
  '購入はすべて既存の Booth 商品ページへ移動する形で、サイト内で決済は行いません。',
  '無料版から段階的に選べる設計なので、最初から有料版を選ぶ前提ではありません。',
  '支援したい気持ちと購入したい気持ちは分けて考えられるよう、購入導線と Ko-fi 支援導線は別ページに整理しています。'
];
