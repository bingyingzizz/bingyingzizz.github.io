# 只剩 $k\ge2$ 的尾巴：$O(\sqrt{x}\log x)$
`imp.pnt-lemma2` · 推出 · strong 边 · 根 `../`

`lem.psi-theta-sum` ψ 与 θ 的分组恒等式 + `thm.chebyshev-estimate` Чебышёв 估计 → `lem.psi-theta-asymptotic` ψ 与 θ 的差是 o(x)

由 `lem.psi-theta-sum`，$\psi(x)-\theta(x)=\sum_{k\ge2}\theta(x^{1/k})$。每项非负，且 $x^{1/k}\le\sqrt{x}$、项数 $\le\log_{2}x$，故



$$0\le\psi(x)-\theta(x)\le(\log_{2}x)\,\theta(\sqrt{x})\le(\log_{2}x)\,\sqrt{x}\,\log x=o(x),$$



最后一步用 $\theta(y)=\sum_{p\le y}\log p\le\pi(y)\log y\le y\log y$。于是 $\psi=\theta+o(x)$，两者相差 $o(x)$，渐近等价性相同。∎
