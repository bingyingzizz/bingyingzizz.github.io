# Burnside 满射性
`imp.burnside` · 推出 · strong 边 · 根 `../`

`def.semisimple-representation` 半单表示 + `def.representation-morphism` 表示同态 → `thm.burnside-surjectivity` Burnside 满射性定理

单向量：令 $W=Av$，取 $A$-子模 $U$ 使 $V=W\oplus U$。线性映射 $g(w+u)=f(w)$ 是 $A$-线性的（$f$ 与 $A$ 的作用交换），但 $g\in\operatorname{End}_A(V)$ 不一定等于某个 $a\in A$ 的作用——这里正是缺口。
多向量：把 $f$ 对角地作用在 $V^n$ 上，取 $v=(v_1,\ldots,v_n)$；要得到 $a$ 使 $av=f(v)$，需先证明 $f(v)\in Av$，一般不对。
完整证明需要 Jacobson 密度定理（本图无节点），故本条标 skeleton。
