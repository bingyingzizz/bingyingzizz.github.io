# 数学星图 · 缺口清单（提到了，但没节点 / 没边）

规模：1467 节点 / 2785 连线。本文件由 `tools/build.mjs` 生成，**警告级**，不是硬门。

怎么读：
- **第一节**：`src/data/gaps.js` 里的候选词，正文提到了 N 次，却没有任何节点的名字/别名对得上 ⇒ 这是个洞。
- **第二节**：某节点陈述里出现了定义 `X` 的名字，却没有通向 `X` 的边 —— 读者顺着这个词会掉下去。
- **第三节**：候选词表里**一次都没提到**的词（真空白：连「提过」都没有）。

⚠️ 第二节会误报（「顺嘴提一句」也算），所以只列出来给人看，不做断言。

## 一、提到了但没有节点（31 个）

### 单位圆　出现 24 次
`thm.integral-trig` · `thm.euler-formula` · `def.normal-curvature` · `def.principal-curvature` · `thm.max-modulus` · `thm.mayer-vietoris` 等 20 个节点

### 原函数　出现 14 次
`thm.ftc-riemann-part2` · `thm.cauchy-goursat` · `def.residue` · `prop.single-valued-branch` · `thm.taylor-complex` · `thm.winding-homotopy` 等 9 个节点

### 角度　出现 10 次
`thm.liouville-formula` · `prop.conformal-iff` · `def.isometry` · `def.intrinsic-quantity` · `def.riemannian-metric` · `def.trig-function` 等 7 个节点

### 三角剖分　出现 9 次
`def.singular-homology` · `thm.simplicial-approximation` · `thm.gauss-bonnet` · `def.simplicial-complex` · `thm.euler-characteristic` · `thm.homotopy-invariance`

### 环面　出现 8 次
`def.orientable-surface` · `thm.gauss-bonnet` · `def.vector-field` · `def.integral-manifold` · `thm.frobenius` · `def.simply-connected` 等 7 个节点

### 素因子　出现 6 次
`def.simple-group` · `def.divisor-function` · `def.mobius-function` · `thm.mu-sum` · `thm.bertrand` · `thm.quadratic-reciprocity`

### Fourier 变换　出现 6 次
`thm.riemann-lebesgue` · `thm.bounded-extension` · `thm.closed-graph` · `def.pontryagin-dual` · `thm.pontryagin-van-kampen`

### 概率　出现 6 次
`def.lebesgue-stieltjes` · `thm.cauchy-schwarz` · `def.tangent-distribution` · `def.jacobi-symbol` · `def.convex-function`

### 偏微分方程　出现 5 次
`thm.frobenius` · `thm.fundamental-theorem-surfaces` · `def.involutive-distribution` · `def.closed-form`

### 亏格　出现 4 次
`thm.gauss-bonnet` · `def.nullity` · `def.orientable-manifold`

### 表示论　出现 4 次
`thm.cayley` · `def.flow` · `thm.stone-weierstrass-complex` · `thm.pontryagin-van-kampen`

### 二元运算　出现 3 次
`def.field` · `def.group` · `def.ring`

### 闭曲面　出现 3 次
`thm.gauss-bonnet` · `def.orientable-surface` · `def.orientable-manifold`

### 代数闭包　出现 3 次
`thm.minimal-poly-divisor`

### 群的阶　出现 1 次
`def.primitive-root`

### 幂函数　出现 1 次
`def.logarithm-branch`

### 弧度　出现 1 次
`def.trig-function`

### 拓扑流形　出现 1 次
`prop.maximal-atlas`

### 连通和　出现 1 次
`thm.mv-homology`

### 曲面分类　出现 1 次
`thm.gauss-bonnet`

### 射影平面　出现 1 次
`thm.euler-characteristic`

### 解析数论　出现 1 次
`thm.euclid-infinite-primes`

### 模形式　出现 1 次
`def.symplectic-matrix`

### 域扩张　出现 1 次
`def.solvable-group`

### 正规扩张　出现 1 次
`thm.solvable-quotients`

### 可证明性　出现 1 次
`def.satisfaction`

### 紧致性定理　出现 1 次
`lem.zorn`

### 完备性定理　出现 1 次
`def.satisfaction`

### 一阶逻辑的完备性　出现 1 次
`def.satisfaction`

### Hodge 理论　出现 1 次
`thm.divergence-theorem`

### 调和形式　出现 1 次
`thm.divergence-theorem`

## 二、陈述用到更深的定义却没有边（146 处）

- `def.fiber-bundle`（纤维丛 · L10）用到 `def.lie-group`（Lie 群 · L25）　落差 15
- `def.t35-space`（T3.5 空间 · L6）用到 `def.regular-space`（正则空间 · L18）　落差 12
- `def.discrete-huber-pair`（离散 Huber pair · L8）用到 `def.analytic-ring`（解析环 · L18）　落差 10
- `ex.ab-of-categories`（Ab(C) 的例子 · L15）用到 `def.lie-group`（Lie 群 · L25）　落差 10
- `def.bundle-section`（丛的截面 · L10）用到 `def.vector-field`（向量场 · L19）　落差 9
- `def.exterior-derivative`（外微分（欧氏开集） · L15）用到 `def.closed-form`（闭形式 · L23）　落差 8
- `def.exterior-derivative`（外微分（欧氏开集） · L15）用到 `def.exact-form`（恰当形式 · L23）　落差 8
- `def.smooth-manifold`（光滑流形 · L8）用到 `def.partial-derivative`（偏导数 · L16）　落差 8
- `def.manifold-chart`（图卡 · L8）用到 `def.partial-derivative`（偏导数 · L16）　落差 8
- `def.bundle-section`（丛的截面 · L10）用到 `def.form-on-manifold`（微分形式 · L18）　落差 8
- `thm.simple-approximation`（简单函数逼近 · L8）用到 `def.uniform-convergence`（一致收敛 · L15）　落差 7
- `prop.mobius-classification`（分式线性变换的分类 · L19）用到 `def.geodesic`（测地线 · L26）　落差 7
- `thm.simple-approximation`（简单函数逼近 · L8）用到 `def.pointwise-convergence`（逐点收敛 · L14）　落差 6
- `def.connection-form`（联络形式 · L21）用到 `def.second-fundamental-form`（第二基本形式 · L26）　落差 5
- `prop.single-valued-branch`（单值支的存在判据 · L19）用到 `def.analytic-continuation`（解析延拓 · L24）　落差 5
- `thm.lifting`（提升定理 · L7）用到 `def.path-homotopy`（道路同伦 · L12）　落差 5
- `prop.generators-abelian-sheaves`（生成元给出阿贝尔层的生成元 · L11）用到 `def.topos`（拓扑斯 · L16）　落差 5
- `prop.syzygy-stability`（合冲的稳定性 · L16）用到 `def.projective-dimension`（投射维数 · L20）　落差 4
- `def.affine-connection`（仿射联络 · L22）用到 `def.geodesic`（测地线 · L26）　落差 4
- `def.bundle-section`（丛的截面 · L10）用到 `def.differential-form`（微分形式（欧氏开集） · L14）　落差 4
- `def.lie-algebra`（Lie 代数 · L21）用到 `def.lie-group`（Lie 群 · L25）　落差 4
- `def.hamiltonian-vector-field`（Hamilton 向量场 · L22）用到 `def.volume-form`（体积形式 · L26）　落差 4
- `def.subspace-topology`（子空间拓扑 · L5）用到 `def.subspace`（子空间 · L9）　落差 4
- `def.quotient-vs`（商空间 · L6）用到 `def.subspace`（子空间 · L9）　落差 3
- `def.quotient-vs`（商空间 · L6）用到 `def.linear-map`（线性映射 · L9）　落差 3
- `def.connection-form`（联络形式 · L21）用到 `def.gauss-curvature`（Gauss 曲率 · L24）　落差 3
- `def.curvature-tensor`（Riemann 曲率张量 · L23）用到 `def.second-fundamental-form`（第二基本形式 · L26）　落差 3
- `def.frenet-frame`（曲率与挠率 · L17）用到 `def.moving-frame`（活动标架 · L20）　落差 3
- `prop.pullback-forms`（拉回（开集间） · L16）用到 `def.vector-field`（向量场 · L19）　落差 3
- `thm.darboux`（Darboux 定理 · L22）用到 `def.riemannian-metric`（Riemann 度量 · L25）　落差 3
- `thm.linear-continuous-bounded`（连续 ⟺ 有界 · L12）用到 `def.banach-space`（Banach 空间 · L15）　落差 3
- `thm.separable-hilbert-is-l2`（可分 Hilbert 空间等距于 ℓ² · L13）用到 `def.hilbert-space`（Hilbert 空间 · L16）　落差 3
- `def.cauchy-null`（Cauchy 列与零列 · L11）用到 `def.cauchy-sequence`（Cauchy 列 · L14）　落差 3
- `prop.quasi-compact-properties`（拟紧的性质 · L13）用到 `def.precanonical-topology`（预标准拓扑 · L16）　落差 3
- `prop.quasi-compact-properties`（拟紧的性质 · L13）用到 `def.topos`（拓扑斯 · L16）　落差 3
- `prop.injective-criterion`（内射对象的判据 · L15）用到 `def.grothendieck-category`（Grothendieck 范畴 · L18）　落差 3
- `prop.k-calculus-fractions`（K(A) 允许分式演算 · L15）用到 `def.quasi-iso`（拟同构 · L18）　落差 3
- `prop.slice-topos`（切片拓扑斯 · L13）用到 `def.topos`（拓扑斯 · L16）　落差 3
- `def.bound`（界与确界 · L6）用到 `def.ordered-field`（有序域 · L8）　落差 2
- `thm.quotient-universal-vs`（商空间的万有性质 · L7）用到 `def.subspace`（子空间 · L9）　落差 2
- `thm.quotient-universal-vs`（商空间的万有性质 · L7）用到 `def.linear-map`（线性映射 · L9）　落差 2
- `def.similarity`（相似 · L12）用到 `def.minimal-poly`（极小多项式 · L14）　落差 2
- `cor.free-solid-product`（自由固态群是大乘积 · L15）用到 `def.condensed-abelian-group`（凝聚态阿贝尔群 · L17）　落差 2
- `prop.solid-hypercover`（固态化把超覆盖变成正合列 · L15）用到 `def.condensed-abelian-group`（凝聚态阿贝尔群 · L17）　落差 2
- `prop.free-solid-solid`（自由固态群是固态的 · L16）用到 `def.solid-group`（固态阿贝尔群 · L18）　落差 2
- `lem.solid-completion-criterion`（完备化判据 · L17）用到 `def.derived-category`（导出范畴 · L19）　落差 2
- `def.tor`（挠积 · L13）用到 `def.deleted-resolution`（删除消解 · L15）　落差 2
- `def.gauss-curvature`（Gauss 曲率 · L24）用到 `def.second-fundamental-form`（第二基本形式 · L26）　落差 2
- `def.ac-function`（绝对连续函数 · L14）用到 `def.absolute-continuity`（绝对连续 · L16）　落差 2
- `def.spectral-radius`（谱半径 · L12）用到 `def.orthogonally-similar`（正交相似 · L14）　落差 2
- `def.congruent-matrices`（合同矩阵 · L13）用到 `def.inertia-index`（惯性指数 · L15）　落差 2
- `def.real`（实数系 ℝ · L12）用到 `def.cauchy-sequence`（Cauchy 列 · L14）　落差 2
- `lem.representable-quotient`（可表示性的下降 · L14）用到 `def.topos`（拓扑斯 · L16）　落差 2
- `prop.quasi-compact-properties`（拟紧的性质 · L13）用到 `def.canonical-topology`（标准拓扑 · L15）　落差 2
- `prop.quasi-compact-properties`（拟紧的性质 · L13）用到 `def.pretopos`（预拓扑斯 · L15）　落差 2
- `prop.condab-generated`（CondAb 由有限表现投射对象生成 · L15）用到 `def.condensed-abelian-group`（凝聚态阿贝尔群 · L17）　落差 2
- `prop.cgwh-closed`（弱 Hausdorff 紧生成空间的开闭子空间与滤过余极限 · L7）用到 `def.subspace`（子空间 · L9）　落差 2
- `prop.injective-resolution-lift`（内射消解之间的提升 · L16）用到 `def.quasi-iso`（拟同构 · L18）　落差 2
- `prop.totally-disconnected-subspace`（全不连通对子空间封闭 · L7）用到 `def.subspace`（子空间 · L9）　落差 2
- `prop.copowers-give-adjoint`（有余幂则可表示函子有伴随 · L10）用到 `def.representable`（表示函子 · L12）　落差 2
- `prop.spectral-sequence-page-picture`（谱序列的页画在 (p,q) 平面上 · L17）用到 `def.vector-field`（向量场 · L19）　落差 2
- `def.similarity`（相似 · L12）用到 `def.char-poly`（特征多项式 · L13）　落差 1
- `def.inner-product`（内积 · L9）用到 `def.bilinear-form`（双线性型 · L10）　落差 1
- `def.operator-adjoint`（伴随算子 · L10）用到 `def.orthonormal-set`（正交基 · L11）　落差 1
- `thm.solid-abelian`（固态群构成阿贝尔子范畴 · L18）用到 `def.derived-category`（导出范畴 · L19）　落差 1
- `def.scalar-restriction`（标量限制 · L8）用到 `def.linear-map`（线性映射 · L9）　落差 1
- `def.regular-surface`（曲面与参数化 · L19）用到 `def.differential-map`（切映射 · L20）　落差 1
- `def.riemannian-metric`（Riemann 度量 · L25）用到 `def.geodesic`（测地线 · L26）　落差 1
- `def.complex-partial`（复偏导数 · L16）用到 `def.directional-derivative`（方向导数 · L17）　落差 1
- `def.tangent-bundle`（切丛 · L18）用到 `def.jacobian`（Jacobi 矩阵 · L19）　落差 1
- `def.vector-bundle`（向量丛 · L9）用到 `def.linear-isomorphism`（线性同构 · L10）　落差 1
- `thm.cartan-formula`（Cartan 公式 · L22）用到 `def.closed-form`（闭形式 · L23）　落差 1
- `thm.cartan-formula`（Cartan 公式 · L22）用到 `def.exact-form`（恰当形式 · L23）　落差 1
- `prop.poincare-disk`（Poincaré 圆盘与双曲几何 · L25）用到 `def.geodesic`（测地线 · L26）　落差 1
- `def.form-on-manifold`（微分形式 · L18）用到 `def.jacobian`（Jacobi 矩阵 · L19）　落差 1
- `def.spectral-radius`（谱半径 · L12）用到 `def.char-poly`（特征多项式 · L13）　落差 1
- `def.eigenspace`（特征子空间 · L12）用到 `def.char-poly`（特征多项式 · L13）　落差 1
- `thm.projection-convex`（凸闭集的最近点 · L15）用到 `def.hilbert-space`（Hilbert 空间 · L16）　落差 1
- `def.universal-colimit`（万有关系 · L13）用到 `def.regular-epi`（正则满态射 · L14）　落差 1
- `prop.subobject-lattice`（子对象构成有界格 · L15）用到 `def.topos`（拓扑斯 · L16）　落差 1
- `lem.representable-quotient`（可表示性的下降 · L14）用到 `def.canonical-topology`（标准拓扑 · L15）　落差 1
- `def.quasi-compact`（拟紧对象 · L15）用到 `def.topos`（拓扑斯 · L16）　落差 1
- `prop.cond-projectives`（Cond 有足够多投射对象 · L15）用到 `def.free-compact-hausdorff`（自由紧 Hausdorff 空间 · L16）　落差 1
- `prop.cond-projectives`（Cond 有足够多投射对象 · L15）用到 `def.condensed-set`（凝聚态集 · L16）　落差 1
- `prop.complex-additive`（复形范畴是加法范畴 · L13）用到 `def.kernel-cokernel`（核与余核 · L14）　落差 1
- `ex.ab-of-categories`（Ab(C) 的例子 · L15）用到 `def.topo-ab-group`（拓扑阿贝尔群 · L16）　落差 1
- `prop.open-covering-covering`（开覆盖给出覆盖 · L15）用到 `def.condensed-set`（凝聚态集 · L16）　落差 1
- `def.complete`（完备 · L14）用到 `def.cauchy-sequence`（Cauchy 列 · L14）
- `def.totally-bounded`（全有界 · L14）用到 `def.cauchy-sequence`（Cauchy 列 · L14）
- `def.direct-sum`（直和与补空间 · L10）用到 `def.linear-isomorphism`（线性同构 · L10）
- `def.invariant-subspace`（不变子空间 · L10）用到 `def.kernel-image-vs`（核与像 · L10）
- `def.similarity`（相似 · L12）用到 `def.determinant`（行列式 · L12）
- `def.orthogonality`（正交 · L10）用到 `def.bilinear-form`（双线性型 · L10）
- `thm.det-as-exterior`（行列式 = 最高外幂上的作用 · L12）用到 `def.determinant`（行列式 · L12）
- `thm.solid-abelian`（固态群构成阿贝尔子范畴 · L18）用到 `def.solid-group`（固态阿贝尔群 · L18）
- `prop.tensor-functor-properties`（张量积的函子性质 · L12）用到 `def.tensor-product-vs`（张量积（向量空间） · L12）
- `def.injective-dimension`（内射维数 · L20）用到 `def.projective-dimension`（投射维数 · L20）
- `def.group-cohomology`（群上同调 · L11）用到 `def.right-derived-functor`（右导出函子 · L11）
- `def.etale-space`（étale 空间 · L5）用到 `def.continuous-map`（连续映射 · L5）
- `def.intrinsic-quantity`（内蕴量 · L26）用到 `def.second-fundamental-form`（第二基本形式 · L26）
- `prop.geodesic-existence`（测地线的局部存在唯一性 · L27）用到 `def.exponential-map`（指数映射 · L27）
- `def.signed-measure`（符号测度 · L15）用到 `def.absolute-convergence`（绝对收敛 · L15）
- `def.complex-partial`（复偏导数 · L16）用到 `def.partial-derivative`（偏导数 · L16）
- `def.vector-bundle`（向量丛 · L9）用到 `def.smooth-map`（光滑映射 · L9）
- `lem.poincare-lemma`（Poincaré 引理 · L23）用到 `def.closed-form`（闭形式 · L23）
- `def.boundary-manifold`（带边流形 · L9）用到 `def.smooth-map`（光滑映射 · L9）
- `def.volume-density`（体积密度与体积形式 · L26）用到 `def.volume-form`（体积形式 · L26）
- `def.singular-homology`（奇异同调群 · L19）用到 `def.singular-chain`（奇异链 · L19）
- `def.local-trivialization`（局部平凡化 · L8）用到 `def.smooth-manifold`（光滑流形 · L8）
- `thm.schur-triangularization`（Schur 三角化 · L14）用到 `def.normal-matrix`（正规矩阵 · L14）
- `thm.schur-triangularization`（Schur 三角化 · L14）用到 `def.orthogonally-similar`（正交相似 · L14）
- `thm.symplectic-normal-form`（辛标准形定理 · L15）用到 `def.inertia-index`（惯性指数 · L15）
- `thm.bounded-operators-banach`（B(E,F) 完备 · L15）用到 `def.banach-space`（Banach 空间 · L15）
- `thm.bounded-extension`（有界算子的延拓 · L15）用到 `def.banach-space`（Banach 空间 · L15）
- `thm.projection-subspace`（闭子空间的正交投影 · L16）用到 `def.hilbert-space`（Hilbert 空间 · L16）
- `thm.baire`（Baire 纲定理 · L15）用到 `def.locally-compact`（局部紧 Hausdorff 空间 · L15）
- `def.empty`（空集 ∅ · L0）用到 `def.first-order-language`（一阶语言 · L0）
- `def.quotient-topology`（商拓扑 · L6）用到 `def.quotient-vs`（商空间 · L6）
- `def.commutative-diagram`（图与交换图 · L9）用到 `def.natural-transformation`（自然变换 · L9）
- `def.presheaf`（预层 · L9）用到 `def.natural-transformation`（自然变换 · L9）
- `def.slice-category`（切片范畴 · L12）用到 `def.comma-category`（逗号范畴 · L12）
- `def.free-presentation`（自由表示 · L16）用到 `def.free-compact-hausdorff`（自由紧 Hausdorff 空间 · L16）
- `def.universal-colimit`（万有关系 · L13）用到 `def.effective-equivalence`（有效等价关系 · L13）
- `prop.pretopos-factorization`（满-单分解 · L16）用到 `def.topos`（拓扑斯 · L16）
- `prop.subobject-lattice`（子对象构成有界格 · L15）用到 `def.pretopos`（预拓扑斯 · L15）
- `def.precanonical-topology`（预标准拓扑 · L16）用到 `def.topos`（拓扑斯 · L16）
- `prop.precanonical-sheaf`（预标准拓扑下的层 · L16）用到 `def.precanonical-topology`（预标准拓扑 · L16）
- `prop.precanonical-sheaf`（预标准拓扑下的层 · L16）用到 `def.topos`（拓扑斯 · L16）
- `prop.precanonical-mono-epi`（单满在层化后不变 · L16）用到 `def.precanonical-topology`（预标准拓扑 · L16）
- `prop.precanonical-mono-epi`（单满在层化后不变 · L16）用到 `def.topos`（拓扑斯 · L16）
- `prop.topos-sheaf-limits`（拓扑斯上的层即保极限的预层 · L16）用到 `def.topos`（拓扑斯 · L16）
- `prop.quasi-compact-properties`（拟紧的性质 · L13）用到 `def.pretopology`（预拓扑 · L13）
- `def.quasi-separated`（拟分离对象 · L16）用到 `def.topos`（拓扑斯 · L16）
- `def.chaus-pretopos`（紧 Hausdorff 空间构成预拓扑斯 · L16）用到 `def.topos`（拓扑斯 · L16）
- `def.condensed-set`（凝聚态集 · L16）用到 `def.precanonical-topology`（预标准拓扑 · L16）
- `def.underlying-topological-space`（底拓扑空间 · L16）用到 `def.condensed-set`（凝聚态集 · L16）
- `lem.stonean-projective`（Stonean 给出有限表现投射对象 · L17）用到 `def.condensed-abelian-group`（凝聚态阿贝尔群 · L17）
- `thm.long-exact`（长正合列 · L18）用到 `def.cohomological-functor`（上同调函子 · L18）
- `prop.breen-deligne-ss-stonean`（Stonean 上 Breen–Deligne 的谱序列 · L17）用到 `def.condensed-abelian-group`（凝聚态阿贝尔群 · L17）
- `prop.hom-presheaf-sheaf`（Hom 预层是层 · L16）用到 `def.condensed-set`（凝聚态集 · L16）
- `prop.module-tensor-universal`（张量积对双线性映射万有 · L12）用到 `def.tensor-product-vs`（张量积（向量空间） · L12）
- `prop.coproduct-chaus`（不交并是紧 Hausdorff 的余积 · L16）用到 `def.free-compact-hausdorff`（自由紧 Hausdorff 空间 · L16）
- `prop.crystalline-sheaf-equiv`（晶体层就是 X 上的层 · L16）用到 `def.topos`（拓扑斯 · L16）
- `prop.crystalline-sheaf-equiv`（晶体层就是 X 上的层 · L16）用到 `def.crystalline-sheaf`（晶体层 · L16）
- `prop.zmod-is-ab`（Z-模就是阿贝尔群 · L8）用到 `def.subcategory`（子范畴 · L8）
- `prop.discontinuity-types`（间断点分类 · L15）用到 `def.function-limit-onesided`（单侧极限 · L15）

## 三、候选词表里从没被提到的（35 个）

换底公式 · 自然对数 · 正切 · 反正弦 · 反三角函数 · 克莱因瓶 · 莫比乌斯带 · 三角剖分存在性 · zeta 函数 · ζ 函数 · 黎曼猜想 · 狄利克雷级数 · 伽罗瓦群 · 可分扩张 · 代数扩张 · 分裂域 · 求根公式 · 五次方程 · 尺规作图 · 命题逻辑 · 幂对象 · Riesz–Markov · 图论 · 组合数学 · 超积 · Radó · 咖啡杯 · 甜甜圈 · 负负得正 · 除以零 · 芝诺 · 费马大定理 · 哥德巴赫猜想 · 连续统假设 · 哥德尔不完备定理
