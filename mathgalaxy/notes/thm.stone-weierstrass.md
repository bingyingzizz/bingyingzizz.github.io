# Stone–Weierstrass 定理　`thm.stone-weierstrass`　·　说明
根 `../`

证明三步：

① 取闭包：$\overline A$ 仍含单位、分离点，并由「含单位的闭子代数是格」成为**格**。

② **两点插值**：$x \ne y$、目标值 $\alpha, \beta \in \mathbb{R}$。取 $g \in A$ 使 $g(x) \ne g(y)$，解二元一次方程组得 $f = a\cdot 1 + b g \in A$ 使 $f(x) = \alpha$、$f(y) = \beta$。

③ **上下夹**：固定 $f \in C(K)$ 与 $\varepsilon$。先逐点从上方压：每个 $x$ 有邻域与某个 $h \in \overline A$ 使 $h > f - \varepsilon$；紧性取有限覆盖并用 $\max$；再对有限多个 $x$ 用 $\min$ 压到 $h < f + \varepsilon$。得 $\|f - h\| < 2\varepsilon$。

⚠️ 三条假设缺一不可：$A = \{f : f(0) = 0\}$ 缺单位；$A = $ 常数函数缺分离点。

⭐ 这是「用**代数**性质换**逼近**能力」的样板：不需要光滑、不需要可数、不需要任何具体核。经典 Weierstrass 定理（多项式逼近）就是 $K = [a,b]$、$A = $ 多项式的特例。
