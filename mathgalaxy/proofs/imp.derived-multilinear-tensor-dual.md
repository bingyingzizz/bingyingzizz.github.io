# 万有性质给出 $n$ 重线性型与 $V^{\otimes n}$ 上线性泛函的同构
`imp.derived-multilinear-tensor-dual` · 推出 · strong 边 · 根 `../`

`thm.tensor-universal-property` 张量积的万有性质 → `def.multilinear-form` 多重线性型

**二元情形。** 万有性质是 $\operatorname{Hom}_{K}(V\otimes W, U) \cong \operatorname{Bil}(V,W;U)$。取 $U = K$ 得

$$\operatorname{Hom}_{K}(V\otimes W, K) \cong \operatorname{Bil}(V,W;K), \qquad \widetilde{B} \mapsto \widetilde{B}\circ\otimes .$$

**归纳到 $n$ 元。** 设 $\operatorname{Mult}_{n-1}(V;K) \cong \operatorname{Hom}_{K}(V^{\otimes n-1}, K)$。给 $f \in \operatorname{Mult}_{n}(V;K)$，固定第一个变元得 $f_{v} \in \operatorname{Mult}_{n-1}(V;K)$，且 $v \mapsto f_{v}$ 是线性的；按归纳假设它是线性映射 $V \to \operatorname{Hom}_{K}(V^{\otimes n-1},K)$，而「线性映射进 Hom」等价于双线性映射（currying）

> 续见 proofs/imp.derived-multilinear-tensor-dual.2.md
