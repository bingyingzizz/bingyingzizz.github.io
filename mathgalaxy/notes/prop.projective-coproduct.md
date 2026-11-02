# 投射对象的余积投射　`prop.projective-coproduct`　·　说明
根 `../`

**证明。** 设 $P_{i}$（$i \in I$）都投射，$Q := \coprod_{i} P_{i}$，带余射 $\iota_{i} : P_{i} \to Q$。任给满态射 $e : X \twoheadrightarrow Y$ 与 $f : Q \to Y$，要造 $g$ 使 $e g = f$：
- 限制到每个分量，$f \iota_{i} : P_{i} \to Y$。因为 $P_{i}$ 投射，存在 $g_{i} : P_{i} \to X$ 使 $e g_{i} = f \iota_{i}$；
- 余积的**泛性质**给出唯一的 $g : Q \to X$ 使 $g \iota_{i} = g_{i}$（对所有 $i$）；
- 于是 $e g \iota_{i} = e g_{i} = f \iota_{i}$ 对所有 $i$ 成立，再由余积泛性质的**唯一性**得 $e g = f$。∎

对偶地（把上面每个箭头反向、余积换积、满态射换单态射）：内射对象的积仍内射。
