# 内积与 Hom
`imp.character-inner-product-hom` · 推出 · strong 边 · 根 `../`

`lem.fixed-space-dimension` 不动点维数与特征标 + `prop.character-operations` 特征标的运算 + `def.tensor-representation` 张量积表示 + `def.dual-representation` 对偶表示 → `prop.character-inner-product-hom` 特征标内积与 Hom 维数

令 $W=\operatorname{Hom}_F(V_1,V_2)$，$G$ 作用 $(g\cdot f)(v)=g f(g^{-1}v)$；则 $W^G=\operatorname{Hom}_G(V_1,V_2)$。
由特征标乘性，$\chi_W(g)=\chi_{V_1^*}(g)\chi_{V_2}(g)=\chi_{V_1}(g^{-1})\chi_{V_2}(g)$。
对 $W$ 用不动点维数引理：$\dim W^G=\langle\chi_W,\mathbf 1\rangle=\frac1{|G|}\sum_g\chi_{V_1}(g^{-1})\chi_{V_2}(g)=\langle\chi_{V_1},\chi_{V_2}\rangle$。$\blacksquare$
