# 形式的短正合列取上同调 $\implies$ 长正合列
`imp.mf-mayer-vietoris` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 → `thm.mayer-vietoris` Mayer–Vietoris 序列

**短正合列。** 限制映射把 $M$ 上的形式送到 $U$、$V$ 上，差把两块送到重叠处：

$$0 \to \Omega^{k}(M) \xrightarrow{\ r\ } \Omega^{k}(U) \oplus \Omega^{k}(V) \xrightarrow{\ s\ } \Omega^{k}(U \cap V) \to 0 ,$$

$$r(\omega) := \bigl(\omega\big|_{U},\ \omega\big|_{V}\bigr),\qquad s(\omega_{U},\omega_{V}) := \omega_{U}\big|_{U \cap V} - \omega_{V}\big|_{U \cap V} .$$

**单射。** $r(\omega) = 0$ 说明 $\omega$ 在 $U$ 与 $V$ 上都为零，而 $M = U \cup V$，故 $\omega = 0$。

> 续见 proofs/imp.mf-mayer-vietoris.2.md
