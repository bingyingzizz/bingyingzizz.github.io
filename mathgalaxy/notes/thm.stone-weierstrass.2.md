# Stone–Weierstrass 定理　`thm.stone-weierstrass`　·　说明
根 `../`

- **对 $x$ 覆盖并取有限 $\max$**：令 $U_{x} := \{t \in K : h_{x}(t) > f(t) - \varepsilon\}$，它含 $x$ 且开。取有限个 $U_{x_1}, \ldots, U_{x_m}$ 覆盖 $K$，令 $k := \max_{i} h_{x_i} \in \overline{A}$。下界：任一点落在某个 $U_{x_j}$ 里，故 $k \ge h_{x_j} > f - \varepsilon$。上界：每个 $h_{x_j}$ 都**处处**满足 $h_{x_j} < f + \varepsilon$，取有限 $\max$ 后仍有 $k < f + \varepsilon$。合起来 $f - \varepsilon < k < f + \varepsilon$，即 $\|k - f\|_\infty < \varepsilon$。

$\varepsilon$ 任意，于是 $f \in \overline{A}$，于是 $\overline{A} = C(K)$。

∎

⚠️ 三条假设缺一不可：$A = \{f : f(0) = 0\}$ 缺单位；$A = $ 常数函数缺分离点。

⭐ 这是「用**代数**性质换**逼近**能力」的样板：不需要光滑、不需要可数、不需要任何具体核。经典 Weierstrass 定理（多项式逼近）就是 $K = [a,b]$、$A = $ 多项式的特例。
