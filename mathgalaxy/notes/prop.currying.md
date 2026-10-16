# Currying　`prop.currying`　·　说明
根 `../`

**证明。** 给 $f : X \times Y \to Z$，令 $\widehat{f}(x)(y) = f(x, y)$ ✓；反过来给 $g$ 令 $f(x,y) = g(x)(y)$ ✓ —— 两个方向互逆且自然 ✓，所以 $\mathbf{Set}(X \times Y, Z) \cong \mathbf{Set}\bigl(X, \mathbf{Set}(Y, Z)\bigr)$ ✓。$\mathbf{Cat}$（函子范畴）与 $\mathbf{Ab}$ 里有同一套伴随 —— 这就是**笛卡尔闭**。∎
