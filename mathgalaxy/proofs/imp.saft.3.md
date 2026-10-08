# 保极限 $\implies$ 有左伴随
`imp.saft` · 推出 · strong 边 · 根 `../`

`def.limit` 极限 + `def.comma-category` 逗号范畴 → `thm.saft` 伴随函子定理

**单。** 设 $\varphi(u) = \varphi(v)$，其中 $u, v : F(X) \to Y_{0}$。要证 $u = v$。

由 $\mathcal{D}$ 有小极限，取 $(Y_{0}, f)$ 处的投影 $\pi = \pi_{(Y_{0}, f)}$。由于 $F(X)$ 是那个极限，$u = v$ 当且仅当 $u \circ \pi = v \circ \pi$。而 $\pi$ 是 $f$ 处的那一项，$u \circ \pi$ 与 $v \circ \pi$ 都是 $F(X) \to Y_{0}$，且

$$G(u \circ \pi) \circ \eta_{X} = G(u) \circ G(\pi) \circ \eta_{X} = G(u) \circ f = G(u) \circ \varphi(v) \circ \eta_{X}$$

用 $\varphi$ 沿 $\eta$ 的互逆性（并用 $G$ 保极限把极限拉回去）得到 $u \circ \pi = v \circ \pi$，于是 $u = v$。

> 续见 proofs/imp.saft.4.md
