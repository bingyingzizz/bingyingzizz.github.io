# 万有性质 $\implies$ 双函子性、结合、对称与保直和
`imp.tensor-functor-properties` · 推出 · strong 边 · 根 `../`

`def.tensor-module` 模的张量积 → `prop.tensor-functor-properties` 张量积的函子性质

五个性质全都由**同一个办法**得到：要造 $M \otimes N \to P$，只需给出一个平衡双加性映射 $M \times N \to P$；要证两个张量积之间的映射互逆，在一组生成元（纯张量）上验证即可。

**双函子**：给定 $f : M \to M_{1}$、$g : N \to N_{1}$，$(m, n) \mapsto f(m) \otimes g(n)$ 平衡双加性，唯一给出 $f \otimes g$；加法性由 $\otimes$ 的双加性直接得到 ✓。

**与直和交换**：投影 $\bigoplus_{i} M_{i} \to M_{i_{0}}$ 给出 $\varphi : (\bigoplus_{i} M_{i}) \otimes N \to \bigoplus_{i}(M_{i} \otimes N)$；含入 $M_{i} \otimes N \to (\bigoplus_{i} M_{i}) \otimes N$ 给出反向的 $\psi$。两者在纯张量上互逆，故互为逆同构 ✓。

> 续见 proofs/imp.tensor-functor-properties.2.md
