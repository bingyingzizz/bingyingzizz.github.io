# 张量–内 Hom 伴随 $\implies$ 标量扩张 $\dashv$ 标量限制
`imp.scalar-extension-adjunction` · 推出 · strong 边 · 根 `../`

`thm.hom-tensor-adjunction-mod` 张量与内同态的伴随 + `def.scalar-extension` 标量扩张 → `prop.scalar-extension-adjunction` 标量扩张与限制互为伴随

把 $S$ 看成 $(S, R)$-双模。对左 $R$-模 $M$、左 $S$-模 $P$：

**第一步（$S$-线性 = 特定的 $R$-线性）**：$S \otimes_{R} M$ 由纯张量生成，而 $s \otimes m = s(1 \otimes m)$，所以 $S$-线性映射 $g$ 被 $m \mapsto g(1 \otimes m)$ 完全决定 ✓。

**第二步（反向构造）**：给定 $R$-线性 $\varphi : M \to P$，$(s, m) \mapsto s \varphi(m)$ 是平衡双加性的（$s r$ 与 $r$ 的搬动用 $\varphi$ 的 $R$-线性），故由 `def.tensor-module` 的万有性质唯一给出 $S$-线性映射 $S \otimes_{R} M \to P$ ✓。

> 续见 proofs/imp.scalar-extension-adjunction.2.md
