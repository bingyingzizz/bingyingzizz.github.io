# 可积 / L¹　`def.integrable`　·　说明
根 `../`

- $f$ 可积 $\iff$ $\int f^{+} < \infty$ 且 $\int f^{-} < \infty$：**这是定义**（把 $f$ 拆成正负部，各自是**非负**可测函数，用非负情形的积分）。
- $\iff$ $\int \lvert f\rvert < \infty$：**一步**（$\lvert f\rvert = f^{+} + f^{-}$），**要用非负积分的可加性**。⚠️ 「$\int f$ 有限」与可积**不是**同一件事：$\int f$ 若为**有限的实数**，则 $f^{\pm}$ 都有限、$f$ 必可积；危险的是 $\int f^{+} = \int f^{-} = +\infty$ 时 $\int f$ **无定义**（不是 $0$）—— 那当然不算可积。这正是「可积」必须要求绝对可积的原因。
- $f$ **可测**且 $\lvert f\rvert \le g$、$g$ 可积 $\implies$ $f$ 可积：**这一步要单调性**（`prop.integral-order`）。

> 续见 notes/def.integrable.3.md
