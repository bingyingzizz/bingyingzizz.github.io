# 右正合 + 平坦的定义 $\implies$ 五条等价刻画
`imp.flat-equivalences` · 推出 · strong 边 · 根 `../`

`prop.tensor-right-exact` 张量函子右正合 + `def.flat-module` 平坦模 → `prop.flat-equivalences` 平坦的等价说法

**4 蕴含 2**：先化到 $M$ 有限生成（$(-) \otimes N$ 保滤过余极限，而单射在滤过余极限下封闭），再对生成元个数归纳，每一步把「子模含入」拆成「理想含入 + 短正合列」，用蛇引理拼回去 —— 完整论证见 `thm.lambek` ✓。

**5** 只是把 1、2 换成有限表现模的说法（$R^{n} \to M$ 有限生成自由），等价性是显然的 ✓。∎

> 第 4 条是唯一能真正动手算的判据：理想比子模少，乘法映射 $I \otimes N \to N$ 又常能显式写出。
