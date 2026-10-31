# 左不变形式　`def.left-invariant-form`　·　说明
根 `../`

**为什么赋值是同构**：左不变性取 $h = e$ 得 $\omega_{g}(\mathrm{d}(L_{g})_{e}w) = \omega_{e}(w)$，故 $\omega_{g} = \mathrm{d}(L_{g^{-1}})^{\ast}\omega_{e}$，即 $\omega$ 由 $\omega_{e}$ 决定（单射）。反向：给定 $\alpha \in \bigwedge^{k}\mathfrak{g}^{\ast}$ 令 $\omega_{g} := \mathrm{d}(L_{g^{-1}})^{\ast}\alpha$，则 $L_{h}^{\ast}\omega = \omega$，因为

$$L_{(hg)^{-1}} = L_{g^{-1}}\circ L_{h^{-1}},\qquad L_{h^{-1}}\circ L_{h} = \operatorname{id},$$

两个左平移把 $\mathrm{d}(L_{h})$ 吃掉，恰好还原。所以 $\omega \mapsto \omega_{e}$ 是双射，线性显然。

**与左不变向量场互为对偶**：`prop.left-invariant-fields` 说左不变向量场与 $\mathfrak{g}$ 同构；这里说左不变 $k$-形式与 $\bigwedge^{k}\mathfrak{g}^{\ast}$ 同构。$k = 1$ 时两组互为对偶基 —— 这正是活动标架法（`def.moving-frame`）在群上的版本：标架自身不动，动的只是点。

> 续见 notes/def.left-invariant-form.2.md
