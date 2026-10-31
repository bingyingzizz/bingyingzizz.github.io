# 与直和交换 + 单位 $\implies$ 自由模平坦
`imp.free-flat` · 推出 · strong 边 · 根 `../`

`prop.tensor-functor-properties` 张量积的函子性质 + `def.flat-module` 平坦模 → `prop.free-flat` 自由模平坦

由「单位」$R \otimes_{R} N \cong N$ 与「与直和交换」，对每个 $A$ 有自然同构
$$A \otimes_{R} R^{(I)} \;\cong\; A \otimes_{R} \bigoplus_{i \in I} R \;\cong\; \bigoplus_{i \in I} (A \otimes_{R} R) \;\cong\; A^{(I)} .$$
所以 $(-) \otimes_{R} R^{(I)} \cong \bigoplus_{i \in I} (-)$ 就是「取 $I$ 重直和」这个函子。

一族函子的直和正合：$f : A \to A_{1}$ 单射 $\iff$ 每个分量 $f$ 单射，而 $(f)^{(I)}$ 就是 $f$ 的 $I$ 重直和、单射性逐分量判定 ✓。故自由模平坦。

**投射模平坦**：投射模是某自由模的直和项，由 `prop.flat-summand` 继承平坦性 ✓。∎

> 这条让「投射消解也是平坦消解」成立，于是 $\operatorname{Tor}$ 可以用更短的平坦消解来算。
