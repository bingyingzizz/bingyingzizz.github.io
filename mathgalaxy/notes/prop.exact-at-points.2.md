# 正合就是逐点正合　`prop.exact-at-points`　·　说明
根 `../`

**各方向用到的假设**（逐处正合是定义组合，逐元素判断另有限制）：
- 短正合 $\iff$ 三处都正合、左正合 $\iff$ 前两处正合、右正合 $\iff$ 后两处正合：两方向都是正合列定义展开，不用分裂、内射对象或选择公理。
- 左端正合 $\iff\ker i=0\iff i$ 为单态射，右端正合 $\iff\operatorname{coker}p=0\iff p$ 为满态射：前一步用零对象，后一步用阿贝尔范畴的核与余核判据。
- 中间正合 $\iff\operatorname{im}i=\ker p$ 是定义；“逐点”指列中各对象位置，抽象阿贝尔范畴不能未经解释就使用元素或集合满射。
- 短正合不推出分裂：$0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$ 为反例；只检查中间也不够，$0\to\mathbb Z\to0\to0\to0$ 在中间正合而左端不正合。
