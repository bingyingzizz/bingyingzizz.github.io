# 自由表示　`def.free-presentation`　·　说明
根 `../`

对照集合里的那件事：对 $f : X \to Y$，令 $R := X \times_{Y} X = \{(x_{1},x_{2}) : f(x_{1}) = f(x_{2})\}$（「像相同的点对」），则 $X/R \cong \operatorname{im} f$（**Noether 第一同构定理**）；反过来，给定 $X$ 上的等价关系 $R$，把 $Y := X/R$，就有 $R = X \times_{Y} X$。

自由表示就是把这件事搬进 $\mathbf{CHaus}$：$R$ 是「把像相同的点粘起来」那个等价关系，而第三条要求 $R$ 自己也能由一个自由紧 Hausdorff 空间满射过来 —— 于是整个 $S$ 由自由对象经过一次余等化子造出来。

$\mathbf{CHaus}$ 里有余等化子，所以 $\operatorname{coker}(R \rightrightarrows F)$ 存在；它就是商空间 $F/R$。
