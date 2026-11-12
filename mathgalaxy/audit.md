# 数学星图 · 内容体检（警告级）

由 `tools/build.mjs` 生成。**不是硬门**：这三类都会误报，先看，别急着改数据。

## 一、正文引用了不存在的 id（1 个）

- `imp.lch-cr` ← def.one-point-compactification.notes

## 二、近同名却没有任何边（11 对）

判据：label 去掉括注/空格后相同或前缀相近（与 `_tools/_nov15.mjs` 同口径），且两颗星之间一条边都没有。

- Euler 定理（`thm.euler-theorem` L10）⇸ Euler 类（`def.euler-class` L37）
- Euler 函数（`def.euler-phi` L14）⇸ Euler 类（`def.euler-class` L37）
- Euler 判别法（`thm.euler-criterion` L16）⇸ Euler 类（`def.euler-class` L37）
- Pontryagin 对偶（`def.pontryagin-dual` L19）⇸ Pontryagin 类（`def.pontryagin-class` L36）
- Euler 公式（`thm.euler-formula` L23）⇸ Euler 类（`def.euler-class` L37）
- Euler 示性数（`thm.euler-characteristic` L25）⇸ Euler 类（`def.euler-class` L37）
- 阿贝尔群范畴（`def.category-of-abelian-groups` L8）⇸ 阿贝尔层（`def.abelian-sheaf` L16）
- 阿贝尔层（`def.abelian-sheaf` L16）⇸ 阿贝尔求和（分部求和）（`lem.abel-summation` L23）
- Euler 公式（`thm.euler-formula-surface` L30）⇸ Euler 类（`def.euler-class` L37）
- Euler 乘积（`thm.euler-product` L30）⇸ Euler 类（`def.euler-class` L37）
- 阿贝尔范畴（`def.abelian-category` L16）⇸ 阿贝尔层（`def.abelian-sheaf` L16）

## 三、黑边子图上的环（2 个）

判据见审计 §9-H2：**环里有 equivalence 边 = 合法**（等价类本来就会缩成一个 SCC）；**白名单 = 多前提假环**（`src/data/gaps.js` 的 `cycleOk`，每条都写了理由）；**其余 = 可疑**（要么改 `equivalence`，要么标 `layer:false`，要么这条边就是错的）。

- ✅ 等价类（合法）：`ax.choice` ↔ `thm.wellordering` ↔ `lem.zorn`
  - 环上的边：`eq.ac-wo` · `eq.wo-zorn` · `imp.zorn-choice`
- ⚪ 白名单（多前提假环）：`def.sequentially-compact` ↔ `def.totally-bounded` ↔ `def.complete`
  - 环上的边：`imp.seqcompact-totbdd` · `imp.seqcompact-complete` · `imp.complete-totbdd-seqcompact`
  - 为什么不算循环：多前提假环：列紧 ⟹ 全有界（无条件），完备 + 全有界 ⟹ 列紧（带假设）。图层对 sources 一视同仁，于是「完备是列紧的前提」与「列紧是完备的前提」同时成立 —— 不是数学循环。

## 四、证明完成度标注（status）

值只许 `complete`（缺省）/ `skeleton` / `external-input`。正文自己说「骨架 / 未展开 / 外部输入」却没标注的，列在下面。

- 该标未标：`thm.jordan-polygon`
- 该标未标：`def.simplicial`
- 该标未标：`def.simplex-category`
- 该标未标：`def.flabby-sheaf`
- 该标未标：`thm.lifting`
- 该标未标：`def.cw-complex`
- 该标未标：`thm.prime-number-theorem`
- 该标未标：`def.partial-isometry`
- 该标未标：`thm.milman-pettis`
- 该标未标：`def.connected-sum`
- 该标未标：`def.triangulation`
- 该标未标：`def.algebraic-extension`
- 该标未标：`def.riemann-zeta`
- 该标未标：`thm.developable-iff-flat`


## 五、假设标注（hypotheses）

值必须来自 `src/data/hypotheses.js` 的受控词表。第二条**只是提醒**：陈述里命中「假设关键词」却没标注 —— ⛔ 不自动打标（「注里提到」不等于「陈述里的假设」）。

- 词表外取值：（没有）
- 陈述里出现假设关键词、但没标注：**263** 处

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
  - thm.fubini-complete  ‹完备›
  - prop.product-incomplete  ‹完备›
  - cor.integral-is-ac-nbv  ‹选择公理›
  - lem.ac-subset-bv  ‹选择公理›
  - def.lp-norm  ‹完备›
  - thm.lp-banach  ‹完备›
  - prop.dense-simple-compact-support  ‹局部紧›
  - def.real-metric-space  ‹完备›
  - def.ae  ‹完备›
  - def.hausdorff  ‹Hausdorff›
  - def.connected  ‹连通›
  - thm.jordan-polygon  ‹连通›
  - def.jordan-curve  ‹Hausdorff›
  - thm.jordan-curve  ‹连通›
  - thm.real-ordered-field  ‹完备›
  - lem.archimedean  ‹完备›
  - thm.real-unique  ‹完备›
  - thm.saft  ‹完备›
  - def.chaus  ‹Hausdorff›
  - prop.chaus-reflective  ‹Hausdorff›
  - lem.minimal-closed-surjection  ‹Hausdorff›
  - def.free-compact-hausdorff  ‹Hausdorff›
  - prop.chaus-quotient-of-free  ‹Hausdorff›
  - prop.free-projective  ‹Hausdorff›
  - def.free-presentation  ‹Hausdorff›
  - cor.chaus-free-presentation  ‹Hausdorff›
  - …还有 223 处

