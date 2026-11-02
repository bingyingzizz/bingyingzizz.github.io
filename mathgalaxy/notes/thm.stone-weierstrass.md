# Stone–Weierstrass 定理　`thm.stone-weierstrass`　·　说明
根 `../`

证明三步：

① 取闭包：$\overline A$ 仍含单位、分离点，并由「含单位的闭子代数是格」成为**格**。

② **两点插值**：$x \ne y$、目标值 $\alpha, \beta \in \mathbb{R}$。取 $g \in A$ 使 $g(x) \ne g(y)$，解二元一次方程组得 $f = a\cdot 1 + b g \in A$ 使 $f(x) = \alpha$、$f(y) = \beta$。

③ **上下夹**（两小步，全程都在 $\overline{A}$ 里做 —— 它已经由①②验过是闭子代数）：

- **逐点从下方压**：固定 $f \in C(K)$ 与 $\varepsilon > 0$。对每个 $x \in K$，由①（单点上逼近）存在 $h_{x} \in \overline{A}$ 使 $h_{x}(x) > f(x) - \varepsilon$；由 $h_x - f$ 连续，存在 $x$ 的开邻域 $U_{x}$，在其上 $h_{x} > f - \varepsilon$。
- **紧性取有限并**：$K$ 紧，于是 有限个 $U_{x_{1}}, \ldots, U_{x_{m}}$ 覆盖 $K$。由②（$\overline{A}$ 对 $\max$ 封闭）得 $h := \max_{i} h_{x_{i}} \in \overline{A}$，且 $h > f - \varepsilon$ 处处成立。

> 续见 notes/thm.stone-weierstrass.2.md
