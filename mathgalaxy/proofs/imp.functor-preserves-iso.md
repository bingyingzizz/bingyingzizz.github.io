# 函子保复合与单位 $\implies$ 保同构
`imp.functor-preserves-iso` · 推出 · strong 边 · 根 `../`

`def.functor` 函子 → `prop.functor-preserves-iso` 函子保同构

由 $f f^{-1} = 1_Y$ 与函子保复合：

$$F(f)\,F(f^{-1}) = F(f f^{-1}) = F(1_Y) = 1_{F(Y)}.$$

同理由 $f^{-1} f = 1_X$ 得 $F(f^{-1})\,F(f) = 1_{F(X)}$。故 $F(f)$ 可逆且逆为 $F(f^{-1})$。$\blacksquare$
