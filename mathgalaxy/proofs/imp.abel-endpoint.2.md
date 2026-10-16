# Abel–Dirichlet 判别法 $\implies$ Abel 第二定理
`imp.abel-endpoint` · 推出 · strong 边 · 根 `../`

`def.power-series` 幂级数 + `thm.abel-dirichlet-series` Abel–Dirichlet 判别法 → `thm.abel-endpoint` Abel 第二定理

$$f(x) - s = (1 - x)\sum_{n=0}^{\infty} (s_n - s)\, x^{n}$$
3. 给定 $\varepsilon > 0$，取 $N$ 使 $n \ge N$ 时 $|s_n - s| < \varepsilon / 2$。把和拆成前 $N$ 项与尾部：前 $N$ 项乘上 $(1 - x)$ 当 $x \to 1^{-}$ 时趋于零；尾部被 $(1-x)\sum_{n \ge N} \varepsilon/2 \cdot x^{n} \le \varepsilon/2$ 控制。
4. 合并：$\limsup_{x \to 1^{-}} |f(x) - s| \le \varepsilon/2 < \varepsilon$，故极限为 $s$。∎

（这里第 1 步的求和是 Abel 求和法的核心 —— 它与 Abel–Dirichlet 判别法同源：都是把一个级数换成它的部分和的加权平均。）

> 「$(1-x)\sum s_n x^{n}$」这个改写把 $\{s_n\}$ 的**收敛性**变成了权重 $(1-x)x^{n}$ 的**平均** —— 权重之和恰为 $1$，所以极限读起来就是「$s_n$ 的加权平均趋于 $s$」。
