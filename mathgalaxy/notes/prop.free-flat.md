# 自由模平坦　`prop.free-flat`　·　说明
根 `../`

**证明**：由 `prop.tensor-functor-properties` 的「单位」与「与直和交换」两条，

$$(-) \otimes_{R} R^{(I)} \;\cong\; \bigoplus_{i \in I} (-),$$

右边就是「取 $I$ 重直和」，它正合（一族函子的直和正合，因为单射逐分量判定）✓。

**投射模平坦**：投射模是自由模的直和项（`def.projective-object` 之后的注记），而直和项继承平坦性（`prop.flat-summand`）✓。∎

⭐ **用处**：这条保证了「投射消解就是平坦消解」，于是 $\operatorname{Tor}$ 既可以用投射消解算、也可以用平坦消解算；后者常常短得多（例如局部化给出的平坦消解）。

⚠️ 反向不成立：平坦不投射（`ex.flat-not-projective`）。
