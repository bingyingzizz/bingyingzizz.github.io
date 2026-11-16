# 模同态的核与像是子模
`dep.modulehom-submodule` · 推出 · strong 边 · 根 `../`

`def.module-hom` 模同态 → `def.submodule` 子模

设 $f : M \to N$ 是 $R$-模同态。$f(0)=0$ 故 $0\in \ker f$；若 $x, y \in \ker f$、$r \in R$，则 $f(x-y)=0$、$f(rx) = r f(x) = 0$，故 $\ker f \le M$ 是子模。同理 $x, y$ 在像里时 $f(x-y) = f(x)-f(y)$ 仍在像里、$r f(x) = f(rx)$ 仍在像里，且 $0 = f(0)$ 在像里，故 $\operatorname{im} f \le N$ 是子模。∎

> 这是判定（核与像落在子模里），不是定义依赖：模同态的定义不要求先有子模。
