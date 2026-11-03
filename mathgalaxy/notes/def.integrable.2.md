# 可积 / L¹　`def.integrable`　·　说明
根 `../`

- $f$ 可积 $\iff$ $\int f^{+} < \infty$ 且 $\int f^{-} < \infty$：**这是定义**（把 $f$ 拆成正负部，各自是**非负**可测函数，用非负情形的积分）。
- $\iff$ $\int \lvert f\rvert < \infty$：**一步**（$\lvert f\rvert = f^{+} + f^{-}$），**要用非负积分的可加性**。⚠️ 反过来「$\int f$ 有限」**不**推出可积 —— 若 $f^{+}$ 与 $f^{-}$ 都是 $+\infty$，则 $\int f$ 无定义（不是 $0$），这正是「可积」必须要求绝对可积的原因。
- $f$ **可测**且 $\lvert f\rvert \le g$、$g$ 可积 $\implies$ $f$ 可积：**这一步要单调性**（`prop.integral-order`）。

⚠️ **必须的假设**：**$f$ 可测**（不可测函数谈不上积分）。与 **Riemann 可积**的差别：Riemann 要求有界 + 不连续点零测（`thm.riemann-lebesgue-criterion`），而 Lebesgue 可积**不要求有界**（$1/\sqrt{x}$ 在 $(0,1]$ 上 Lebesgue 可积）；反之有界 Riemann 可积必 Lebesgue 可积（`prop.riemann-implies-lebesgue`）。
