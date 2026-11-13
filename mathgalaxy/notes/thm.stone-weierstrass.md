# Stone–Weierstrass 定理　`thm.stone-weierstrass`　·　说明
根 `../`

证明三步：

① 取闭包：$\overline A$ 仍含单位、分离点，并由「含单位的闭子代数是格」成为**格**。

② **两点插值**：$x \ne y$、目标值 $\alpha, \beta \in \mathbb{R}$。取 $g \in A$ 使 $g(x) \ne g(y)$，解二元一次方程组得 $f = a\cdot 1 + b g \in A$ 使 $f(x) = \alpha$、$f(y) = \beta$。

③ **上下夹**（全程在 $\overline{A}$ 里做 —— 它已由①②验过是含单位的闭子代数，且对 $\max,\min$ 封闭）：

- **两点同时命中**：给定 $x \ne y$ 与 $\varepsilon > 0$。由②取 $g_{xy} \in \overline{A}$ 使 $g_{xy}(x) = f(x)$、$g_{xy}(y) = f(y)$。

- **固定 $x$、对 $y$ 取有限 $\max$**：对每个 $y$，由 $g_{xy}(y) = f(y) < f(y) + \varepsilon$ 与连续性，存在 $y$ 的开邻域 $V_{y}$，在其上 $g_{xy} < f + \varepsilon$。$K$ 紧，取有限个 $V_{y_1}, \ldots, V_{y_n}$ 覆盖 $K$，令 $h_{x} := \max_{j} g_{xy_j} \in \overline{A}$。则 $h_{x} < f + \varepsilon$ 处处成立，且 $h_{x}(x) = f(x) > f(x) - \varepsilon$。

> 续见 notes/thm.stone-weierstrass.2.md
