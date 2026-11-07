# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

⚠️ **本节点仍标 skeleton**：下面把「素数定理 $\iff$ $\psi(x) \sim x$」这一段**完整证明**，并把剩下的解析主定理写成可检验的命题；但那条解析主定理（$\zeta$ 在 $\operatorname{Re} s = 1$ 上无零点 $+$ Tauber 型收尾）本图没有展开，所以不勾 ∎。

**记号**：$\Lambda(n) = \log p$（$n = p^{k}$）或 $0$（其它），

$$\psi(x) = \sum_{n \le x} \Lambda(n),\qquad \theta(x) = \sum_{p \le x} \log p,\qquad \pi(x) = \#\{p \le x\}.$$

**引理 1（$\psi$ 与 $\theta$ 的关系）**：

$$\psi(x) = \sum_{k \ge 1} \theta\big(x^{1/k}\big).$$

证明：按 $n = p^{k}$ 的 $k$ 分组，$p^{k} \le x \iff p \le x^{1/k}$，每组贡献 $\log p$，求和即 $\theta(x^{1/k})$；$k > \log_{2} x$ 时 $x^{1/k} < 2$，对应项为 $0$。∎

**引理 2（$\psi \sim x \iff \theta \sim x$）**：由引理 1，

> 续见 notes/thm.prime-number-theorem.2.md
