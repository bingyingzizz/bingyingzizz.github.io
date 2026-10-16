# 函子　`def.functor`　·　说明
根 `../`

- **遗忘函子** $\mathbf{Top} \to \mathbf{Set}$：$(X, \tau) \mapsto X$，连续映射当作普通映射。拓扑被丢掉，所以叫「遗忘」。同理 $\mathbf{Ab} \to \mathbf{Set}$、$\mathbf{Grp} \to \mathbf{Mon}$（含入）。
- $\mathbf{Set} \to \mathbf{Top}$ 有两种：$X \mapsto (X, \mathcal{P}(X))$（离散拓扑）与 $X \mapsto (X, \{ \emptyset, X \})$（平凡拓扑）。两者都对，因为从离散空间射出、射入平凡空间的映射总是连续的。
- **自由构造** $\mathbf{Set} \to \mathbf{Ab}$：$X \mapsto \bigoplus_X \mathbb{Z}$；$\mathbf{Set} \to \mathbf{Grp}$：$X \mapsto \langle x, x^{-1} \mid x \in X \rangle$。
- **交换化** $\mathbf{Grp} \to \mathbf{Ab}$：$G \mapsto G / [G, G]$。
- **群化** $\mathbf{Mon} \to \mathbf{Grp}$：$M \mapsto M^{gr} = \langle x_g \ (g \in M) \mid x_g x_h = x_{gh} \rangle$。
- $\mathbf{Top}^{\mathrm{op}} \to \mathbf{Cat}$：$(X, \tau) \mapsto \operatorname{Open}(X)$。反变，因为开集越少映射越多。
