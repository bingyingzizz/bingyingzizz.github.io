# 张量–内 Hom 伴随 $\implies$ 标量扩张 $\dashv$ 标量限制
`imp.scalar-extension-adjunction` · 推出 · strong 边 · 根 `../`

`thm.hom-tensor-adjunction-mod` 张量与内同态的伴随 + `def.scalar-extension` 标量扩张 → `prop.scalar-extension-adjunction` 标量扩张与限制互为伴随

**第三步（互逆与自然）**：两个构造互为逆（在 $1 \otimes m$ 上显然），公式无选取，故自然。于是
$$\operatorname{Hom}_{S}(S \otimes_{R} M, P) \;\cong\; \operatorname{Hom}_{R}(M, f_{\ast} P) .$$

**单位与余单位**：把 $\mathrm{id}$ 沿同构对来对去得 $\eta_{M}(m) = 1 \otimes m$ 与 $\varepsilon_{P}(s \otimes p) = s p$；三角恒等式在纯张量与 $M$ 的元素上验证，再线性延拓 ✓。∎

> 这条与 `thm.hom-tensor-adjunction-mod` 是同一条 curry 化的两种用法：那里把 $N$ 当可变变元，这里把环同态 $f$ 当参数。
