# 数学星图 · 缺口清单（提到了，但没节点 / 没边）

规模：1560 节点 / 3227 连线。本文件由 `tools/build.mjs` 生成，**警告级**，不是硬门。

怎么读：
- **第一节**：`src/data/gaps.js` 里的候选词，正文提到了 N 次，却没有任何节点的名字/别名对得上 ⇒ 这是个洞。
- **第二节**：某节点陈述里出现了定义 `X` 的名字，却没有通向 `X` 的边 —— 读者顺着这个词会掉下去。
- **第三节**：候选词表里**一次都没提到**的词（真空白：连「提过」都没有）。

⚠️ 第二节会误报（「顺嘴提一句」也算），所以只列出来给人看，不做断言。

## 一、提到了但没有节点（16 个）

### 单位圆　出现 32 次
`thm.integral-trig` · `thm.boundary-correspondence` · `lem.caratheodory-osgood` · `thm.euler-formula` · `def.normal-curvature` · `def.principal-curvature` 等 26 个节点

### 角度　出现 12 次
`thm.liouville-formula` · `prop.conformal-iff` · `def.isometry` · `def.intrinsic-quantity` · `def.riemannian-metric` · `def.inverse-trig` 等 9 个节点

### 素因子　出现 9 次
`thm.minimal-poly-divisor` · `def.simple-group` · `def.divisor-function` · `def.mobius-function` · `thm.mu-sum` · `thm.chebyshev-estimate` 等 9 个节点

### 概率　出现 8 次
`def.lebesgue-stieltjes` · `thm.dct` · `thm.termwise-L1` · `thm.cauchy-schwarz` · `def.tangent-distribution` · `def.jacobi-symbol` 等 7 个节点

### Fourier 变换　出现 6 次
`thm.riemann-lebesgue` · `thm.bounded-extension` · `thm.closed-graph` · `def.pontryagin-dual` · `thm.pontryagin-van-kampen`

### 偏微分方程　出现 6 次
`thm.frobenius` · `thm.fundamental-theorem-surfaces` · `def.involutive-distribution` · `def.closed-form` · `thm.developable-iff-flat`

### 表示论　出现 5 次
`thm.cayley` · `def.flow` · `thm.stone-weierstrass-complex` · `ex-sl2-commutator` · `thm.pontryagin-van-kampen`

### 调和形式　出现 3 次
`def.hodge-star` · `thm.divergence-theorem`

### 超积　出现 3 次
`thm.compactness`

### 弧度　出现 2 次
`def.inverse-trig` · `def.trig-function`

### 解析数论　出现 2 次
`thm.euclid-infinite-primes` · `thm.euler-product`

### 命题逻辑　出现 2 次
`thm.completeness-first-order`

### 幂函数　出现 1 次
`def.logarithm-branch`

### 黎曼猜想　出现 1 次
`def.riemann-zeta`

### 一阶逻辑的完备性　出现 1 次
`def.satisfaction`

### Hodge 理论　出现 1 次
`thm.divergence-theorem`

## 二、陈述用到更深的定义却没有边（7 处）

- `lem.newman-tauberian`（Newman 解析定理 · L0）用到 `def.analytic-continuation`（解析延拓 · L28）　落差 28
- `lem.newman-tauberian`（Newman 解析定理 · L0）用到 `def.locally-integrable`（局部可积 · L22）　落差 22
- `lem.newman-tauberian`（Newman 解析定理 · L0）用到 `def.improper-integral`（反常积分 · L18）　落差 18
- `def.radon-measure`（Radon 测度 · L16）用到 `def.locally-compact`（局部紧 Hausdorff 空间 · L18）　落差 2
- `def.module-category`（模范畴 · L10）用到 `def.linear-map`（线性映射 · L12）　落差 2
- `def.category-of-groups`（群范畴 · L8）用到 `def.subcategory`（子范畴 · L8）
- `def.category-of-abelian-groups`（阿贝尔群范畴 · L8）用到 `def.subcategory`（子范畴 · L8）

## 二·补　白名单里的（39 条，已判「不是缺边」）

每条都写了为什么。⛔ 为了让这一节变短而加条目 = 刷绿，审阅时逐条看理由。

- `def.invariant-polynomial` 提到 `def.characteristic-class` —— 方向相反：不变多项式是**输入**，示性类是它的产物；本节点只在「用途」一句里点了示性类。
- `thm.chern-weil` 提到 `def.characteristic-class` —— 示性类在本图是陈类的上位概念，而陈–Weil 直接造的是**陈类**（已有 `thm.chern-weil → def.chern-class`）。
- `def.bundle-section` 提到 `def.vector-field` —— 「向量场是截面的特例」是**比喻式对照**，定义本身不用向量场。
- `def.bundle-section` 提到 `def.form-on-manifold` —— 只是举例「微分形式也是截面」，不是依赖。
- `def.bundle-section` 提到 `def.differential-form` —— 同上（举例），且指向的是 $\mathbb{R}^n$ 版，容易连错口径。
- `def.lie-algebra` 提到 `def.lie-group` —— Lie 代数独立定义；提到 Lie 群只是解释「它从哪来」（线性化）。
- `def.connection-form` 提到 `def.second-fundamental-form` —— 「第二基本形式由它算出」是**后果**，定义不用它。
- `def.connection-form` 提到 `def.gauss-curvature` —— 同上（Gauss 曲率是它的产物）。
- `def.curvature-tensor` 提到 `def.second-fundamental-form` —— 原句是「**没有**法向、没有第二基本形式」—— 否定式提及。
- `prop.syzygy-stability` 提到 `def.projective-dimension` —— 原句是「这正是投射维数能良定义的原因」—— 后果，不是前提。
- `def.affine-connection` 提到 `def.geodesic` —— 「进而谈加速度、测地线」是**前瞻**，定义不用测地线。
- `prop.mobius-classification` 提到 `def.geodesic` —— 「沿测地线平移」是双曲型的**几何解释**，分类本身只用矩阵。
- `thm.darboux` 提到 `def.riemannian-metric` —— 原句是「Riemann 度量**做不到**这一点」—— 尖锐对照，不是依赖。
- `prop.pretopos-factorization` 提到 `def.topos` —— 命中的是「预拓扑斯」的子串。
- `def.precanonical-topology` 提到 `def.topos` —— 命中的是「预拓扑斯」的子串。
- `def.bound` 提到 `def.ordered-field` —— 原句是「见『$\mathbb{R}$ 是完备有序域』」—— 导航式提醒。
- `def.ac-function` 提到 `def.absolute-continuity` —— **同名不同物**：这里是「绝对连续**函数**」，那个节点是「测度的绝对连续性（$\mu \ll \nu$）」。
- `def.t35-space` 提到 `def.regular-space` —— 「加了 $T_1$ 之后叫完全正则空间」是**命名备注**，不是依赖。
- `prop.spectral-sequence-page-picture` 提到 `def.vector-field` —— 「同一张图上不同的『向量场』」是**比喻**（打引号的）。
- `prop.pullback-forms` 提到 `def.vector-field` —— 「向量场只能正着推」是**对照**（说形式能力更强）。
- `def.riemannian-metric` 提到 `def.geodesic` —— 「也才有测地线与曲率」是**前瞻**（度量是它们的来源）。
- `prop.subobject-lattice` 提到 `def.topos` —— 命中的是「预拓扑斯」的子串（本命题的前提就是预拓扑斯）。
- `prop.geodesic-existence` 提到 `def.exponential-map` —— 原句是「下一站的指数映射」—— 明确的前向指路。
- `thm.symplectic-normal-form` 提到 `def.inertia-index` —— 与实对称型分类的**对照**，不是前提。
- `def.empty` 提到 `def.first-order-language` —— 「与一阶语言同级」是**类比式说明**。
- `def.quotient-topology` 提到 `def.quotient-vs` —— **同名不同物**：这里是拓扑的**商空间**，那个节点是向量空间的商 $V/U$。
- `prop.module-tensor-universal` 提到 `def.tensor-product-vs` —— **同名不同物**：这里是**模**的张量积，那个节点是向量空间的张量积。
- `def.fiber-bundle` 提到 `def.lie-group` —— 纤维丛本身不需要 Lie 群：只有「结构群」那一层才需要，而结构群已由 `def.fiber-bundle → def.structure-group` 覆盖（结构群节点自己连到 Lie 群）。硬连会把 fiber-bundle 从 L10 抬到 L29，整条丛的链一起虚高。
- `def.smooth-manifold` 提到 `def.partial-derivative` —— $C^{\infty}$ 的定义在 `def.smooth-map` 那一层（真源），本节点只是括注「用偏导数检验」。已改为在 smooth-map 上补根边，避免把整个流形团从 L8 抬到 L16。
- `def.manifold-chart` 提到 `def.partial-derivative` —— 同上（同一个括注，真源在 `def.smooth-map`）。
- `def.exterior-derivative` 提到 `def.closed-form` —— 外微分的陈述只是**命名**「$mathrm{d}omega = 0$ 的叫闭形式」；本图闭形式的定义边已经指向流形版 `prop.exterior-derivative-manifold`，不指坐标模型版。
- `def.exterior-derivative` 提到 `def.exact-form` —— 同上（命名「恰当形式」）。
- `def.cauchy-null` 提到 `def.cauchy-sequence` —— **同名不同物**：这里是**有理**数列版的 Cauchy 列（构造 $mathbb{R}$ 用，$arepsilon$ 取有理数），那个节点是**实**数列版。
- `def.real` 提到 `def.cauchy-sequence` —— **同名不同物**：$mathbb{R}$ 的构造用的是有理 Cauchy 列，已有 `def.cauchy-null → def.real`。
- `prop.cg-kclosed-quotient` 提到 `def.quotient-vs` —— **同名不同物**：这里是拓扑的**商空间**（$k$-闭商），那个节点是向量空间的商 $V/U$。
- `def.separable-extension` 提到 `def.minimal-poly` —— **同名不同物**：可分扩张里的「极小多项式」是**代数元**的（`def.algebraic-element`，已连），不是**算子**的 `def.minimal-poly`（$\mu_{T}$）。
- `prop.tensor-functor-properties` 提到 `def.tensor-product-vs` —— **同名不同物**：本命题讲的是**模**的张量积（`def.tensor-module`，已连），不是向量空间的张量积。
- `ex.ab-of-categories` 提到 `def.lie-group` —— 例子行「Ab(Manifold) = 阿贝尔 Lie 群」是**列答案**，不是依赖。
- `def.injective-dimension` 提到 `def.projective-dimension` —— 陈述用的是平坦维数 fd（图里还没有 `def.flat-dimension`）；pd 只是对偶侧的类比，不是定义依赖 —— 陈述里提到 pd 的那句恰好是「不能写成 pd」的反例。

⚠️ **过期白名单 2 条**（对应的缺口已经不存在了：改了陈述或加了边）—— 该清：`def.bundle-section>def.differential-form` · `def.injective-dimension>def.projective-dimension`

## 三、候选词表里从没被提到的（19 个）

换底公式 · 自然对数 · 反正弦 · 反三角函数 · zeta 函数 · ζ 函数 · 狄利克雷级数 · 模形式 · 求根公式 · 尺规作图 · 图论 · 组合数学 · 负负得正 · 除以零 · 芝诺 · 费马大定理 · 哥德巴赫猜想 · 连续统假设 · 哥德尔不完备定理
