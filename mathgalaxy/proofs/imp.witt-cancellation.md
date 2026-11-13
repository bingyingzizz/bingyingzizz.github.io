# 延拓后固定 $W$，再用正交补的唯一性消去
`imp.witt-cancellation` · 推出 · strong 边 · 根 `../`

`def.bilinear-form` 双线性型 + `def.orthogonal-complement` 正交补 + `lem.witt-extension` Witt 延拓引理 → `thm.witt-cancellation` Witt 消去定理

记 $V_1=U\perp W$、$V_2=U'\perp W$，$f:V_1\to V_2$ 是等距。

**正交补就是另一块。** $W$ 非退化，故 $V_1=W\perp(W^{\perp}\cap V_1)$，且 $\dim(W^{\perp}\cap V_1)=\dim V_1-\dim W=\dim U$；由 $U\subseteq W^{\perp}\cap V_1$ 得 $U=W^{\perp}\cap V_1$。同理 $U'=W^{\perp}\cap V_2$。因此只需找等距 $g:V_1\to V_2$ 使 $g(W)=W$。

**把 $f$ 修正成固定 $W$。** $f(W)$ 非退化。对等距 $f|_W:W\to f(W)$ 用 `lem.witt-extension`（环境 $V_2$ 非退化、$\operatorname{char}K\ne2$）得等距 $F:V_2\to V_2$，且 $F|_W=f|_W$。令 $g=F^{-1}\circ f$。$g$ 是等距；对 $w\in W$，$g(w)=F^{-1}(f(w))=w$，即 $g|_W=\operatorname{id}_W$，故 $g(W)=W$。

> 续见 proofs/imp.witt-cancellation.2.md
