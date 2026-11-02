# 积分有限的后果　`prop.finite-integral-consequences`　·　说明
根 `../`

**证明。** 设 $f \in L^{+}$、$\int f < \infty$。
- **$\{f = +\infty\}$ 是零集**：若 $\mu(\{f = \infty\}) > 0$，则对每个 $n$ 有 $n\,\chi_{\{f=\infty\}} \le f$，故 $\int f \ge n\,\mu(\{f=\infty\}) \to \infty$，与 $\int f < \infty$ 矛盾 ✓。
- **$\{f > 0\}$ 是 $\sigma$ 有限**：
$$\{f > 0\} = \bigcup_{n \ge 1}\bigl\{f > \tfrac1n\bigr\},$$
而由 $\frac1n\chi_{\{f>1/n\}} \le f$ 得 $\mu(\{f > 1/n\}) \le n\int f < \infty$，所以这是一族可数多个**有限测度**集之并，即 $\sigma$ 有限 ✓。∎

第一条：若 $\mu(\{f = \infty\}) > 0$，则对每个 $n$ 有 $\int f \ge n\cdot\mu(\{f=\infty\})$，让 $n \to \infty$ 得 $\int f = \infty$。

第二条：$\{f > 0\} = \bigcup_n \{f > 1/n\}$，而 $\mu(\{f > 1/n\}) \le n\int f < \infty$ —— 所以是**可数**个有限测度集之并。

⭐ 这条解释了为什么「$L^{1}$ 里的函数几乎处处有限」是免费的，也预告了 Lp 空间里的 $\sigma$有限假设。
