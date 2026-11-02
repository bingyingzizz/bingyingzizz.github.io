# 换环的泛性质 $\implies$ 推出与基变换
`imp.scalar-extension-coproduct` · 推出 · strong 边 · 根 `../`

`prop.scalar-extension-adjunction` 标量扩张与限制互为伴随 → `prop.scalar-extension-coproduct` 纤维余积与基变换

**（2）基变换**：$T \otimes_{R} M$ 与 $(S \otimes_{R} T) \otimes_{S} M$ 表示同一个函子：两者都满足「$S$-模 $M$ 与 $T$-模 $N$ 的双线性配对」这一万有性质，对应 $t \otimes m \leftrightarrow (1 \otimes t) \otimes m$，故同构且对 $M$ 自然 ✓。

**（3）**：由交换性，平衡关系允许把 $r$ 从任一因子搬到另一个，故 $(s \otimes t) \cdot (m \otimes n) := s m \otimes t n$ 良定义；模公理逐条验证 ✓。∎

> 几何对偶：$\operatorname{Spec}(S \otimes_{R} T) \cong \operatorname{Spec} S \times_{\operatorname{Spec} R} \operatorname{Spec} T$。环的推出对应概形的纤维积，这就是「基变换」这个名字的来源。
