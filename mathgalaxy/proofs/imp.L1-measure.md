# Markov 不等式 $\implies L^{1}$ 收敛蕴含依测度收敛
`imp.L1-measure` · 推出 · strong 边 · 根 `../`

`def.integrable` 可积 / L¹ → `prop.L1-implies-measure` L¹ 收敛 ⟹ 依测度收敛

**Markov 不等式**：设 $g$ 可测非负，则对任意 $\varepsilon > 0$，

$$\mu(\{g \ge \varepsilon\}) \le (1/\varepsilon)\cdot\int g d\mu$$

证明：在 $\{g \ge \varepsilon\}$ 上有 $\varepsilon \le g$，即 $\varepsilon \chi_{\{g \ge \varepsilon\}} \le g$；两边积分得 $\varepsilon\cdot\mu(\{g \ge \varepsilon\}) \le \int g$。

取 $g = |f_n - f|$。给定 $\delta > 0$，

$$\mu(\{|f_n - f| > \delta\}) \le (1/\delta)\cdot\int |f_n - f| d\mu \to 0$$

（最后一步正是 $L^{1}$ 收敛的定义。）再对任意 $\varepsilon > 0$ 取 $n$ 足够大即可。∎
