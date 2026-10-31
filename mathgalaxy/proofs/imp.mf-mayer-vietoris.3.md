# 形式的短正合列取上同调 $\implies$ 长正合列
`imp.mf-mayer-vietoris` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 → `thm.mayer-vietoris` Mayer–Vietoris 序列

**取上同调。** 每个 $\Omega^{k}$ 上都有 $\mathrm{d}$，且 $r, s$ 与 $\mathrm{d}$ 交换（限制与差都逐点作用，$\mathrm{d}$ 是逐点公式），故这是链映射构成的短正合列。链复形的短正合列取上同调得到长正合列（蛇引理 + 连接同态 $\delta$ 的构造），这就是所要的。

**$\delta$ 的显式形式。** 沿蛇引理的追踪：取 $[\omega] \in H^{k}(U \cap V)$，按上一步拆成 $(\omega_{U}, -\omega_{V})$，在 $M$ 上取它们拼成的 $(k+1)$-形式（差一个 $\mathrm{d}$ 造成的修正），其类就是 $\delta[\omega]$。这一步的符号与 $\mathrm{d}$ 的次序必须逐项对齐，本图不替读者对齐。∎

> 续见 proofs/imp.mf-mayer-vietoris.4.md
