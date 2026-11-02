# 对角 + 正则闭浸入 $\implies$ $f^!R = \det(\Omega)[d]$
`imp.smooth-duality` · 推出 · strong 边 · 根 `../`

`prop.regular-immersion-dualizing` 正则闭浸入的对偶复形 + `prop.f-shriek-base-change` 对偶函子的扭转与基变换 → `thm.smooth-duality` 光滑映射的对偶复形

把 $\operatorname{Spec} A$ 嵌入仿射空间 $\mathbb{A}^n_R$（正则闭浸入），用 `prop.regular-immersion-dualizing` 算出 $f^!R$ 是次数 $d$ 的线丛。

再用对角定出是哪条线丛：$g : A \otimes_R A \to A$ 是余维 $d$ 的正则闭浸入，$p_1, p_2$ 是两个投影。由基变换与投影公式，

$$f^!R = g^!p_1^!f^!R = g^!\bigl(p_1^*f^!R \otimes p_2^*f^!R\bigr) = f^!R \otimes f^!R \otimes g^!(A \otimes_R A).$$

比较次数与行列式（$g^!(A\otimes_R A) = \det(I/I^2)^*[-d]$，而对角的 $I/I^2 = \Omega^1_{A/R}$），得 $f^!R = \det(\Omega^1_{A/R})[d]$。$\blacksquare$
