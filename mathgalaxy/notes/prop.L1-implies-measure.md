# L¹ 收敛 ⟹ 依测度收敛　`prop.L1-implies-measure`　·　说明
根 `../`

工具是 **Markov（Chebyshev）不等式**：$
\mu(\{|g| \ge \varepsilon\}) \le (1/\varepsilon)\cdot\int |g| d\mu$

（因为 $\varepsilon \chi_{\{|g| \ge \varepsilon\}} \le |g|$，两边积分即可。）取 $g = f_n - f$ 就得到结论。

⚠ 反方向不成立：反例 (iii) 就是依测度收敛但不 $L^{1}$ 收敛。
