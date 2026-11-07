# 过滤复形给出谱序列　`thm.filtered-complex-spectral`　·　说明
根 `../`

**构造（逐页逼近的真身）。** 对 $r \ge 0$ 定义两族子对象
$$Z^{p,q}_{r} := F^{p}K^{p+q} \cap (d^{p+q})^{-1}\bigl(F^{p+r}K^{p+q+1}\bigr), \qquad B^{p,q}_{r} := F^{p}K^{p+q} \cap d^{p+q-1}\bigl(F^{p-r+1}K^{p+q-1}\bigr),$$
并令 $E^{p,q}_{r} := Z^{p,q}_{r}/\bigl(B^{p,q}_{r} + Z^{p+1,q-1}_{r-1}\bigr)$（约定 $Z^{p,q}_{0} = F^{p}K^{p+q}$、$Z^{p,q}_{-1} = 0$；分母必须含 $Z^{p+1,q-1}_{r-1}$ 这一「更深过滤层」的代表元，否则 $E_{1}$ 会多出本该为零的项）。逐条读：
- $r = 0$：$Z^{p,q}_{0} = F^{p}K^{p+q}$、$B^{p,q}_{0} = F^{p+1}K^{p+q}$，所以 $E^{p,q}_{0} = \operatorname{Gr}^{p}K^{p+q}$ —— **第一页就是把过滤一层层切开**；
- $r = 1$：$Z^{p,q}_{1}$ 是 $\operatorname{Gr}^{p}K^{p+q}$ 里的闭上链、$B^{p,q}_{1}$ 是边界，故 $E^{p,q}_{1} = H^{p+q}(\operatorname{Gr}^{p}K^{\bullet})$；
- 一般地，$d$ 把 $Z^{p,q}_{r}$ 送进 $Z^{p+r,q-r+1}_{r}$ 并把 $B^{p,q}_{r}$ 送进 $B^{p+r,q-r+1}_{r}$，因此下降为微分 $d_{r} : E^{p,q}_{r} \to E^{p+r,q-r+1}_{r}$，而**

> 续见 notes/thm.filtered-complex-spectral.2.md
