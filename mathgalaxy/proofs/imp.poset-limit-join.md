# imp.poset-limit-join
`imp.poset-limit-join` · 推出 · strong 边 · 根 `../`

`def.limit` 极限 + `def.poset` 偏序集 → `prop.poset-limit-join` 偏序集里的极限是交

**证明。** 把偏序集看成范畴时，$\operatorname{Hom}(x,y)$ 至多一个元素，「锥」$c \to D$ 就退化成「$c \preceq D(i)$ 对一切 $i$」，即 $c$ 是 $D$ 的一个**下界** ✓。
- 泛锥 = 下界中**最大**的那一个 = $\inf D$；「$\lim D$ 存在」正好就是「$\inf D$ 存在」✓。
- 对偶地（把 $\preceq$ 反向），余锥 = 上界，泛余锥 = 最小上界 = $\sup D$ ✓。
- 特例：单点图 $\inf = \sup = $ 该元素；空图给出终对象（最大元）与始对象（最小元）；两元素图给出积 $\inf\{x,y\}$ 与余积 $\sup\{x,y\}$；

拉回、推出分别是下确界、上确界（因为相容条件自动满足）；

> 续见 proofs/imp.poset-limit-join.2.md
