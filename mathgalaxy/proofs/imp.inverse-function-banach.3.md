# 同一套证明换到 Banach 空间（多一步 Neumann 级数）
`imp.inverse-function-banach` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `def.banach-space` Banach 空间 → `thm.inverse-function-banach` 逆映射定理（Banach 版）

**（iii）「Neumann 级数」用在哪里。** 上面第 (i) 步只用到「$A^{-1}$ 有界」。Neumann 级数出现在**更一般的版本**里：当只假设 $Df(a)$ 可逆（而没假设逆有界）时，可以先用

$$(I - S)^{-1} = \sum_{k=0}^{\infty} S^{k} \qquad (\|S\| < 1)$$

> 续见 proofs/imp.inverse-function-banach.4.md
