# 数学星图 · 内容体检（警告级）

由 `tools/build.mjs` 生成。**不是硬门**：这三类都会误报，先看，别急着改数据。

## 一、正文引用了不存在的 id（1 个）

- `prop.poisson-formula` ← lem.caratheodory-osgood.notes

## 二、近同名却没有任何边（8 对）

判据：label 去掉括注/空格后相同或前缀相近（与 `_tools/_nov15.mjs` 同口径），且两颗星之间一条边都没有。

- Euler 定理（`thm.euler-theorem` L10）⇸ Euler 类（`def.euler-class` L38）
- Euler 函数（`def.euler-phi` L14）⇸ Euler 类（`def.euler-class` L38）
- Euler 判别法（`thm.euler-criterion` L16）⇸ Euler 类（`def.euler-class` L38）
- Pontryagin 类（`def.pontryagin-class` L37）⇸ Pontryagin 对偶（`def.pontryagin-dual` L19）
- Euler 类（`def.euler-class` L38）⇸ Euler 公式（`thm.euler-formula` L23）
- Euler 公式（`thm.euler-formula-surface` L30）⇸ Euler 类（`def.euler-class` L38）
- Euler 乘积（`thm.euler-product` L30）⇸ Euler 类（`def.euler-class` L38）
- 阿贝尔群范畴（`def.category-of-abelian-groups` L8）⇸ 阿贝尔层（`def.abelian-sheaf` L16）

## 三、黑边子图上的环（2 个）

判据见审计 §9-H2：**环里有 equivalence 边 = 合法**（等价类本来就会缩成一个 SCC）；**白名单 = 多前提假环**（`src/data/gaps.js` 的 `cycleOk`，每条都写了理由）；**其余 = 可疑**（要么改 `equivalence`，要么标 `layer:false`，要么这条边就是错的）。

- ✅ 等价类（合法）：`ax.choice` ↔ `thm.wellordering` ↔ `lem.zorn`
  - 环上的边：`eq.ac-wo` · `eq.wo-zorn` · `imp.zorn-choice`
- ⚪ 白名单（多前提假环）：`def.sequentially-compact` ↔ `def.totally-bounded` ↔ `def.complete`
  - 环上的边：`imp.seqcompact-totbdd` · `imp.seqcompact-complete` · `imp.complete-totbdd-seqcompact`
  - 为什么不算循环：多前提假环：列紧 ⟹ 全有界（无条件），完备 + 全有界 ⟹ 列紧（带假设）。图层对 sources 一视同仁，于是「完备是列紧的前提」与「列紧是完备的前提」同时成立 —— 不是数学循环。

## 四、证明完成度标注（status）

值只许 `complete`（缺省）/ `skeleton` / `external-input`。正文自己说「骨架 / 未展开 / 外部输入」却没标注的，列在下面。

- 该标未标：`def.connected-sum`
- 该标未标：`def.triangulation`
- 该标未标：`def.algebraic-extension`
- 该标未标：`def.riemann-zeta`
- 该标未标：`thm.developable-iff-flat`
- 该标未标：`def.simplicial`
- 该标未标：`def.simplex-category`


## 五、假设标注（hypotheses）

值必须来自 `src/data/hypotheses.js` 的受控词表。第二条**只是提醒**：陈述里命中「假设关键词」却没标注 —— ⛔ 不自动打标（「注里提到」不等于「陈述里的假设」）。

- 词表外取值：（没有）
- 陈述里出现假设关键词、但没标注：**251** 处

  - ax.choice  ‹选择公理›
  - def.choicefn  ‹选择公理›
  - def.bound  ‹完备›
  - def.complete  ‹完备›
  - def.totally-bounded  ‹完备›
  - def.compact  ‹紧›
  - prop.subset-compact-equiv  ‹完备›
  - cor.borel-product  ‹可分›
  - def.radon-measure  ‹Hausdorff›
  - def.null-set  ‹完备›
  - thm.completion  ‹完备›
  - thm.caratheodory  ‹完备›
  - prop.complete-measurable  ‹完备›
  - prop.completion-measurable-function  ‹完备›
  - def.linear-isomorphism  ‹有限维›
  - thm.rank-nullity  ‹有限维›
  - def.dual-basis  ‹有限维›
  - thm.matrix-linear-map  ‹有限维›
  - thm.fundamental-algebra  ‹代数闭›
  - thm.cayley-hamilton  ‹有限维›
  - thm.minimal-poly-divisor  ‹代数闭›
  - thm.primary-decomposition  ‹代数闭›
  - thm.jordan-canonical-form  ‹代数闭›
  - def.orthogonal-complement  ‹有限维›
  - thm.gram-schmidt  ‹有限维›
  - def.orthogonal-projection  ‹有限维›
  - thm.projection-formula  ‹有限维›
  - def.operator-adjoint  ‹有限维›
  - def.normal-operator  ‹有限维›
  - thm.spectral-theorem  ‹有限维›
  - cor.spectral-normal  ‹有限维›
  - def.normed-space  ‹完备›
  - def.banach-space  ‹完备›
  - thm.banach-fixed-point  ‹完备›
  - cor.archimedean-epsilon  ‹完备›
  - thm.nth-root  ‹完备›
  - def.cond-measure  ‹Hausdorff›
  - def.pre-analytic-ring  ‹Hausdorff›
  - def.analytic-ring  ‹完备›
  - thm.analytic-modules  ‹完备›
  - …还有 211 处

