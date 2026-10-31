# 平衡双加性的万有性质 $\implies$ 张量–内 Hom 伴随
`imp.hom-tensor-adjunction-mod` · 推出 · strong 边 · 根 `../`

`prop.module-tensor-universal` 张量积对双线性映射万有 + `def.tensor-module` 模的张量积 → `thm.hom-tensor-adjunction-mod` 张量与内同态的伴随

**万有性质给出一半**：$\operatorname{Hom}_{R}(M \otimes_{R} N, P)$ 与「平衡双加性映射 $M \times N \to P$」的全体一一对应。

**curry 化给出另一半**：平衡双加性映射 $B : M \times N \to P$ 与「线性映射 $M \to \operatorname{Hom}_{R}(N, P)$」一一对应 —— 给定 $B$，$m \mapsto B(m, -)$ 线性；给定 $g$，$(m, n) \mapsto g(m)(n)$ 平衡双加性。两个方向明显互逆 ✓。

> 续见 proofs/imp.hom-tensor-adjunction-mod.2.md
