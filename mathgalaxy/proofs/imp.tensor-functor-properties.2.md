# 万有性质 $\implies$ 双函子性、结合、对称与保直和
`imp.tensor-functor-properties` · 推出 · strong 边 · 根 `../`

`def.tensor-module` 模的张量积 → `prop.tensor-functor-properties` 张量积的函子性质

**单位**：$r \otimes n \mapsto r n$ 有反向 $n \mapsto 1 \otimes n$，且 $r \otimes n = (1 \cdot r) \otimes n = 1 \otimes r n$ 由平衡关系成立，故 $R \otimes_{R} N \cong N$ ✓。

**结合**：$(m \otimes n) \otimes p \mapsto m \otimes (n \otimes p)$ 与反向都由三重平衡映射给出，互逆 ✓。

**对称**（$R$ 交换）：$\tau(m \otimes n) = n \otimes m$ 良定义（交换性保证 $\tau(m r \otimes n) = \tau(m \otimes r n)$），且 $\tau^{2} = \mathrm{id}$ ✓。∎

> 由「与直和交换」+「单位」两条合成，得到后面反复要用的那句：$(-) \otimes_{R} N$ 保余极限。
