# Lebesgue 集几乎处处　`thm.lebesgue-set-full`　·　说明
根 `../`

证明的思路很巧：对每个复数 $c$，把微分定理用在函数 $|f(x) - c|$ 上，得到「除一个零集 $E_c$ 外，$\lim_{1/m(B)}\int|f(y) - c|dy = |f(x) - c|$」。

然后取 **$\mathbb{C}$ 的一个可数稠密子集 $D$**，令 $E = \bigcup_{c \in D} E_c$（可数并仍是零集）。对 $x \notin E$ 与任意 $\varepsilon > 0$，取 $c \in D$ 使 $|f(x) - c| < \varepsilon$，于是



$$\lim_{r\to0} \frac{1}{m(B(r,x))} \int_{B(r,x)} |f(y) - f(x)| dy \le |f(x) - c| + \varepsilon < 2\varepsilon$$



令 $\varepsilon \to 0$ 即得。∎

⭐ 「取一个可数稠密子集」这一步是可数性技巧的典型用法：把不可数多个条件化归成可数多个零集之并。
