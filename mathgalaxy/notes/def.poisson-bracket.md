# Poisson 括号　`def.poisson-bracket`　·　说明
根 `../`

**它是「$H$ 能否守恒」的判据**：$\frac{d}{dt}f = \{f, H\}$。所以 $f$ 是运动常数 $\iff$ $\{f, H\} = 0$。力学里的「守恒量」全部由这条代数条件刻画 —— 这也是 Noether 定理的辛版本（对称性 $\implies$ 守恒量）。

⭐ **$C^{\infty}(M)$ 因此是 Lie 代数**：括号给出 Lie 括号，而 Hamilton 映射 $H \mapsto X_{H}$ 是**反** Lie 同态（保线性、翻括号），即 $[X_{f}, X_{g}] = -X_{\{f,g\}}$。

这条把「函数代数」与「向量场代数」焊在一起。

⚠️ **Poisson 括号比辛结构更宽**：非退化性不是必需的 —— 允许退化的 Poisson 括号给的是 **Poisson 流形**（例如 Lie 代数对偶 $\mathfrak{g}^{*}$ 上的 Lie–Poisson 括号）。辛流形是 Poisson 流形的特例（非退化的那个）。本图只收辛的那一支。

> 续见 notes/def.poisson-bracket.2.md
