# imp.acyclic-equivalent-conditions
`imp.acyclic-equivalent-conditions` · 推出 · strong 边 · 根 `../`

`def.acyclic-sheaf` 无环层 + `thm.cartan-leray` Cartan–Leray 谱序列 → `prop.acyclic-equivalent-conditions` 无环性的四条等价说法

**路线（骨架，未完成）。**
**(1) $\iff$ (2)**：若 $H^{n}(M)$ 取预层 $X\mapsto H^{n}(X,M)$ 的定义，则这是定义展开；否则需层化比较，未展开。
**(1) $\implies$ (3)**：对固定覆盖用 Cartan–Leray 谱序列 $E^{p,q}_{2}=\check{H}^{p}(\mathfrak{X},H^{q}(M))\implies H^{p+q}(X,M)$；$H^{q}(M)=0$（$q>0$）使 $q>0$ 的行全零，$H^{p+q}=0$（$p+q>0$）给出 $\check{H}^{n}(\mathfrak{X},M)=0$。⚠️ 谱序列收敛所需的覆盖/纤维积假设（仿紧或好覆盖）本图未逐条核，这是缺口。
**(3) $\implies$ (4)**：$\check{H}^{n}(X,-)$ 按定义是沿覆盖加细的滤过

> 续见 proofs/imp.acyclic-equivalent-conditions.2.md
