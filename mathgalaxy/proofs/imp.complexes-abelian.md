# imp.complexes-abelian
`imp.complexes-abelian` · 推出 · strong 边 · 根 `../`

`def.cochain-complex` 上链复形 + `def.abelian-category` 阿贝尔范畴 + `prop.complex-additive` 复形范畴是加法范畴 → `prop.complexes-abelian` 复形范畴是阿贝尔范畴

**证明。** 阿贝尔范畴的定义是：预阿贝尔 + 每个单态射正则（等价地：$\operatorname{coim} f \to \operatorname{im} f$ 是同构）。逐条验：
- **预阿贝尔**：复形范畴是加法范畴，而核与余核**逐项**取（见「复形范畴的性质」）✓；
- **$\operatorname{coim} \to \operatorname{im}$ 逐项同构**：$\mathcal{A}$ 里同构是逐项判断的（复形态射是同构 $\iff$ 每一层都是同构，因为逆映射可以逐层拼起来），所以只要逐项验 ✓；

而每一层上 $\operatorname{coim} f^{n} \to \operatorname{im} f^{n}$ 是 $\mathcal{A}$ 里的同构 ✓；

> 续见 proofs/imp.complexes-abelian.2.md
