type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare interface KtList<E> /* extends Collection<E> */ {
    asJsReadonlyArrayView(): ReadonlyArray<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtList": unique symbol;
    };
}
export declare namespace KtList {
    function fromJsArray<E>(array: ReadonlyArray<E>): KtList<E>;
}
export declare interface KtMap<K, V> {
    asJsReadonlyMapView(): ReadonlyMap<K, V>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMap": unique symbol;
    };
}
export declare namespace KtMap {
    function fromJsMap<K, V>(map: ReadonlyMap<K, V>): KtMap<K, V>;
}
export declare interface KtMutableMap<K, V> extends KtMap<K, V> {
    asJsMapView(): Map<K, V>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMutableMap": unique symbol;
    } & KtMap<K, V>["__doNotUseOrImplementIt"];
}
export declare namespace KtMutableMap {
    function fromJsMap<K, V>(map: ReadonlyMap<K, V>): KtMutableMap<K, V>;
}
export declare interface KtMutableList<E> extends KtList<E>/*, MutableCollection<E> */ {
    asJsArrayView(): Array<E>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMutableList": unique symbol;
    } & KtList<E>["__doNotUseOrImplementIt"];
}
export declare namespace KtMutableList {
    function fromJsArray<E>(array: ReadonlyArray<E>): KtMutableList<E>;
}
/** @deprecated  */
export declare const initHook: { get(): any; };
export declare interface ATProtocol {
    identity(): IdentityResource;
    server(): ServerResource;
    repo(): RepoResource;
    moderation(): ModerationResource;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.ATProtocol": unique symbol;
    };
}
export declare class ATProtocolConfig {
    constructor();
    get pdsUri(): string;
    set pdsUri(value: string);
    get updatePdsUri(): boolean;
    set updatePdsUri(value: boolean);
    get skipSSLValidation(): boolean;
    set skipSSLValidation(value: boolean);
}
export declare namespace ATProtocolConfig {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ATProtocolConfig;
    }
}
export declare abstract class ATProtocolFactory {
    static readonly getInstance: () => typeof ATProtocolFactory.$metadata$.type;
    private constructor();
}
export declare namespace ATProtocolFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instanceFromUri(uri: string): ATProtocol;
            instanceFromConfig(config: ATProtocolConfig): ATProtocol;
            private constructor();
        }
    }
}
export declare interface Bluesky extends ATProtocol {
    actor(): ActorResource;
    feed(): FeedResource;
    graph(): GraphResource;
    labeler(): LabelerResource;
    notification(): NotificationResource;
    unspecced(): UnspeccedResource;
    video(): VideoResource;
    convo(): ConvoResource;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.Bluesky": unique symbol;
    } & ATProtocol["__doNotUseOrImplementIt"];
}
export declare class BlueskyConfig extends ATProtocolConfig.$metadata$.constructor {
    constructor();
    get videoServiceUri(): string;
    set videoServiceUri(value: string);
    get videoServiceDid(): string;
    set videoServiceDid(value: string);
}
export declare namespace BlueskyConfig {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => BlueskyConfig;
    }
}
export declare abstract class BlueskyFactory {
    static readonly getInstance: () => typeof BlueskyFactory.$metadata$.type;
    private constructor();
}
export declare namespace BlueskyFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instanceFromUri(uri: string): Bluesky;
            instanceFromConfig(config?: BlueskyConfig): Bluesky;
            private constructor();
        }
    }
}
export declare interface PLCDirectory {
    DIDDetails(did: string): Promise<Response<DIDDetails>>;
    DIDLogs(did: string): Promise<Response<KtList<DIDLog>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.PLCDirectory": unique symbol;
    };
}
export declare abstract class PLCDirectoryFactory {
    static readonly getInstance: () => typeof PLCDirectoryFactory.$metadata$.type;
    private constructor();
}
export declare namespace PLCDirectoryFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instance(): PLCDirectory;
            instanceFromUri(uri: string): PLCDirectory;
            private constructor();
        }
    }
}
export declare interface ActorResource {
    searchActors(request: ActorSearchActorsRequest): Promise<Response<ActorSearchActorsResponse>>;
    searchActorsTypeahead(request: ActorSearchActorsTypeaheadRequest): Promise<Response<ActorSearchActorsTypeaheadResponse>>;
    getProfile(request: ActorGetProfileRequest): Promise<Response<ActorGetProfileResponse>>;
    updateProfile(request: ActorUpdateProfileRequest): Promise<Response<ActorUpdateProfileResponse>>;
    getProfiles(request: ActorGetProfilesRequest): Promise<Response<ActorGetProfilesResponse>>;
    getPreferences(request: ActorGetPreferencesRequest): Promise<Response<ActorGetPreferencesResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.app.bsky.ActorResource": unique symbol;
    };
}
export declare interface FeedResource {
    getAuthorFeed(request: FeedGetAuthorFeedRequest): Promise<Response<FeedGetAuthorFeedResponse>>;
    getLikes(request: FeedGetLikesRequest): Promise<Response<FeedGetLikesResponse>>;
    getPostThread(request: FeedGetPostThreadRequest): Promise<Response<FeedGetPostThreadResponse>>;
    getPosts(request: FeedGetPostsRequest): Promise<Response<FeedGetPostsResponse>>;
    getQuotes(request: FeedGetQuotesRequest): Promise<Response<FeedGetQuotesResponse>>;
    getRepostedBy(request: FeedGetRepostedByRequest): Promise<Response<FeedGetRepostedByResponse>>;
    getTimeline(request: FeedGetTimelineRequest): Promise<Response<FeedGetTimelineResponse>>;
    getFeed(request: FeedGetFeedRequest): Promise<Response<FeedGetFeedResponse>>;
    getListFeed(request: FeedGetListFeedRequest): Promise<Response<FeedGetListFeedResponse>>;
    getActorFeeds(request: FeedGetActorFeedsRequest): Promise<Response<FeedGetActorFeedsResponse>>;
    getActorLikes(request: FeedGetActorLikesRequest): Promise<Response<FeedGetActorLikesResponse>>;
    searchPosts(request: FeedSearchPostsRequest): Promise<Response<FeedSearchPostsResponse>>;
    getFeedGenerator(request: FeedGetFeedGeneratorRequest): Promise<Response<FeedGetFeedGeneratorResponse>>;
    getFeedGenerators(request: FeedGetFeedGeneratorsRequest): Promise<Response<FeedGetFeedGeneratorsResponse>>;
    like(request: FeedLikeRequest): Promise<Response<FeedLikeResponse>>;
    deleteLike(request: FeedDeleteLikeRequest): Promise<ResponseUnit>;
    post(request: FeedPostRequest): Promise<Response<FeedPostResponse>>;
    deletePost(request: FeedDeletePostRequest): Promise<ResponseUnit>;
    repost(request: FeedRepostRequest): Promise<Response<FeedRepostResponse>>;
    deleteRepost(request: FeedDeleteRepostRequest): Promise<ResponseUnit>;
    threadgate(request: FeedThreadgateRequest): Promise<Response<FeedThreadgateResponse>>;
    postgate(request: FeedPostgateRequest): Promise<Response<FeedPostgateResponse>>;
    createBookmark(request: FeedCreateBookmarkRequest): Promise<ResponseUnit>;
    deleteBookmark(request: FeedDeleteBookmarkRequest): Promise<ResponseUnit>;
    getBookmarks(request: FeedGetBookmarksRequest): Promise<Response<FeedGetBookmarksResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.app.bsky.FeedResource": unique symbol;
    };
}
export declare interface GraphResource {
    follow(request: GraphFollowRequest): Promise<Response<GraphFollowResponse>>;
    deleteFollow(request: GraphDeleteFollowRequest): Promise<ResponseUnit>;
    getFollowers(request: GraphGetFollowersRequest): Promise<Response<GraphGetFollowersResponse>>;
    getFollows(request: GraphGetFollowsRequest): Promise<Response<GraphGetFollowsResponse>>;
    getKnownFollowers(request: GraphGetKnownFollowersRequest): Promise<Response<GraphGetKnownFollowersResponse>>;
    getMutes(request: GraphGetMutesRequest): Promise<Response<GraphGetMutesResponse>>;
    muteActor(request: GraphMuteActorRequest): Promise<ResponseUnit>;
    unmuteActor(request: GraphUnmuteActorRequest): Promise<ResponseUnit>;
    block(request: GraphBlockRequest): Promise<Response<RepoCreateRecordResponse>>;
    deleteBlock(request: GraphDeleteBlockRequest): Promise<ResponseUnit>;
    getBlocks(request: GraphGetBlocksRequest): Promise<Response<GraphGetBlocksResponse>>;
    createList(request: GraphCreateListRequest): Promise<Response<RepoCreateRecordResponse>>;
    editList(request: GraphEditListRequest): Promise<Response<GraphEditListResponse>>;
    deleteList(request: GraphDeleteListRequest): Promise<ResponseUnit>;
    getList(request: GraphGetListRequest): Promise<Response<GraphGetListResponse>>;
    getLists(request: GraphGetListsRequest): Promise<Response<GraphGetListsResponse>>;
    addUserToList(request: GraphAddUserToListRequest): Promise<Response<RepoCreateRecordResponse>>;
    removeUserFromList(request: GraphRemoveUserFromListRequest): Promise<ResponseUnit>;
    getStarterPack(request: GraphGetStarterPackRequest): Promise<Response<GraphGetStarterPackResponse>>;
    getStarterPacks(request: GraphGetStarterPacksRequest): Promise<Response<GraphGetStarterPacksResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.app.bsky.GraphResource": unique symbol;
    };
}
export declare interface LabelerResource {
    getServices(request: LabelerGetServicesRequest): Promise<Response<LabelerGetServicesResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.app.bsky.LabelerResource": unique symbol;
    };
}
export declare interface NotificationResource {
    getUnreadCount(request: NotificationGetUnreadCountRequest): Promise<Response<NotificationGetUnreadCountResponse>>;
    listNotifications(request: NotificationListNotificationsRequest): Promise<Response<NotificationListNotificationsResponse>>;
    updateSeen(request: NotificationUpdateSeenRequest): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.app.bsky.NotificationResource": unique symbol;
    };
}
export declare interface UnspeccedResource {
    getPopular(request: UnspeccedGetPopularRequest): Promise<Response<UnspeccedGetPopularResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.app.bsky.UnspeccedResource": unique symbol;
    };
}
export declare interface VideoResource {
    getJobStatus(request: VideoGetJobStatusRequest): Promise<Response<VideoGetJobStatusResponse>>;
    getUploadLimits(request: VideoGetUploadLimitsRequest): Promise<Response<VideoGetUploadLimitsResponse>>;
    uploadVideo(request: VideoUploadVideoRequest): Promise<Response<JobStatus>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.app.bsky.VideoResource": unique symbol;
    };
}
export declare interface ConvoResource {
    getConvo(request: ConvoGetConvoRequest): Promise<Response<ConvoGetConvoResponse>>;
    getConvoForMembers(request: ConvoGetConvoForMembersRequest): Promise<Response<ConvoGetConvoForMembersResponse>>;
    getLog(request: ConvoGetLogRequest): Promise<Response<ConvoGetLogResponse>>;
    getMessages(request: ConvoGetMessagesRequest): Promise<Response<ConvoGetMessagesResponse>>;
    getListConvos(request: ConvoGetListConvosRequest): Promise<Response<ConvoGetListConvosResponse>>;
    sendMessage(request: ConvoSendMessageRequest): Promise<Response<ConvoDefsMessageView>>;
    updateRead(request: ConvoUpdateReadRequest): Promise<Response<ConvoUpdateReadResponse>>;
    muteConvo(request: ConvoMuteConvoRequest): Promise<Response<ConvoMuteConvoResponse>>;
    unmuteConvo(request: ConvoUnmuteConvoRequest): Promise<Response<ConvoUnmuteConvoResponse>>;
    deleteMessageForSelf(request: ConvoDeleteMessageForSelfRequest): Promise<Response<ConvoDefsDeletedMessageView>>;
    leaveConvo(request: ConvoLeaveConvoRequest): Promise<Response<ConvoLeaveConvoResponse>>;
    addReaction(request: ConvoAddReactionRequest): Promise<Response<ConvoAddReactionResponse>>;
    removeReaction(request: ConvoRemoveReactionRequest): Promise<Response<ConvoRemoveReactionResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.chat.bsky.ConvoResource": unique symbol;
    };
}
export declare interface IdentityResource {
    resolveHandle(request: IdentityResolveHandleRequest): Promise<Response<IdentityResolveHandleResponse>>;
    updateHandle(): void;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.com.atproto.IdentityResource": unique symbol;
    };
}
export declare interface ModerationResource {
    createReport(request: ModerationCreateReportRequest): Promise<Response<ModerationCreateReportResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.com.atproto.ModerationResource": unique symbol;
    };
}
export declare interface RepoResource {
    applyWrites(): void;
    createRecord(request: RepoCreateRecordRequest): Promise<Response<RepoCreateRecordResponse>>;
    deleteRecord(request: RepoDeleteRecordRequest): Promise<ResponseUnit>;
    describeRepo(request: RepoDescribeRepoRequest): Promise<Response<RepoDescribeRepoResponse>>;
    getRecord(request: RepoGetRecordRequest): Promise<Response<RepoGetRecordResponse>>;
    listRecords(request: RepoListRecordsRequest): Promise<Response<RepoListRecordsResponse>>;
    putRecord(request: RepoPutRecordRequest): Promise<Response<RepoPutRecordResponse>>;
    uploadBlob(request: RepoUploadBlobRequest): Promise<Response<RepoUploadBlobResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.com.atproto.RepoResource": unique symbol;
    };
}
export declare interface ServerResource {
    createAccount(): void;
    createInviteCode(): void;
    createSession(request: ServerCreateSessionRequest): Promise<Response<ServerCreateSessionResponse>>;
    deleteAccount(): void;
    deleteSession(request: AuthRequest): Promise<ResponseUnit>;
    describeServer(): void;
    getServiceAuth(request: ServerGetServiceAuthRequest): Promise<Response<ServerGetServiceAuthResponse>>;
    getSession(request: AuthRequest): Promise<Response<ServerGetSessionResponse>>;
    refreshSession(request: AuthRequest): Promise<Response<ServerRefreshSessionResponse>>;
    requestAccountDelete(): void;
    requestPasswordReset(): void;
    resetPassword(): void;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.com.atproto.ServerResource": unique symbol;
    };
}
export declare class ActorGetPreferencesRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider);
    get auth(): AuthProvider;
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider): ActorGetPreferencesRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ActorGetPreferencesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorGetPreferencesRequest;
    }
}
export declare class ActorGetPreferencesResponse {
    constructor(preferences?: KtList<ActorDefsPreferencesUnion>);
    get preferences(): KtList<ActorDefsPreferencesUnion>;
    set preferences(value: KtList<ActorDefsPreferencesUnion>);
    copy(preferences?: KtList<ActorDefsPreferencesUnion>): ActorGetPreferencesResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorGetPreferencesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorGetPreferencesResponse;
    }
}
export declare class ActorGetProfileRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>): ActorGetProfileRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ActorGetProfileRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorGetProfileRequest;
    }
}
export declare class ActorGetProfileResponse extends ActorDefsProfileViewDetailed.$metadata$.constructor {
    constructor();
}
export declare namespace ActorGetProfileResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorGetProfileResponse;
    }
}
export declare class ActorGetProfilesRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actors?: Nullable<KtList<string>>);
    get auth(): AuthProvider;
    get actors(): Nullable<KtList<string>>;
    set actors(value: Nullable<KtList<string>>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actors?: Nullable<KtList<string>>): ActorGetProfilesRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ActorGetProfilesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorGetProfilesRequest;
    }
}
export declare class ActorGetProfilesResponse {
    constructor(profiles?: KtList<ActorDefsProfileViewDetailed>);
    get profiles(): KtList<ActorDefsProfileViewDetailed>;
    set profiles(value: KtList<ActorDefsProfileViewDetailed>);
    copy(profiles?: KtList<ActorDefsProfileViewDetailed>): ActorGetProfilesResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorGetProfilesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorGetProfilesResponse;
    }
}
export declare class ActorSearchActorsRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, term?: Nullable<string>, q?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get term(): Nullable<string>;
    set term(value: Nullable<string>);
    get q(): Nullable<string>;
    set q(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, term?: Nullable<string>, q?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): ActorSearchActorsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ActorSearchActorsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorSearchActorsRequest;
    }
}
export declare class ActorSearchActorsResponse {
    constructor(cursor?: Nullable<string>, actors?: KtList<ActorDefsProfileView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get actors(): KtList<ActorDefsProfileView>;
    set actors(value: KtList<ActorDefsProfileView>);
    copy(cursor?: Nullable<string>, actors?: KtList<ActorDefsProfileView>): ActorSearchActorsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorSearchActorsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorSearchActorsResponse;
    }
}
export declare class ActorSearchActorsTypeaheadRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, term?: Nullable<string>, q?: Nullable<string>, limit?: Nullable<number>);
    get auth(): AuthProvider;
    get term(): Nullable<string>;
    set term(value: Nullable<string>);
    get q(): Nullable<string>;
    set q(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, term?: Nullable<string>, q?: Nullable<string>, limit?: Nullable<number>): ActorSearchActorsTypeaheadRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ActorSearchActorsTypeaheadRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorSearchActorsTypeaheadRequest;
    }
}
export declare class ActorSearchActorsTypeaheadResponse {
    constructor(actors?: KtList<ActorDefsProfileView>);
    get actors(): KtList<ActorDefsProfileView>;
    set actors(value: KtList<ActorDefsProfileView>);
    copy(actors?: KtList<ActorDefsProfileView>): ActorSearchActorsTypeaheadResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorSearchActorsTypeaheadResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorSearchActorsTypeaheadResponse;
    }
}
export declare class ActorUpdateProfileRequest extends AuthRequest.$metadata$.constructor {
    constructor(auth: AuthProvider, displayName?: Nullable<string>, description?: Nullable<string>, avatar?: Nullable<Blob>, banner?: Nullable<Blob>, clearBanner?: boolean, pinnedPost?: Nullable<RepoStrongRef>, clearPinnedPost?: boolean);
    get auth(): AuthProvider;
    get displayName(): Nullable<string>;
    get description(): Nullable<string>;
    get avatar(): Nullable<Blob>;
    get banner(): Nullable<Blob>;
    get clearBanner(): boolean;
    get pinnedPost(): Nullable<RepoStrongRef>;
    get clearPinnedPost(): boolean;
    copy(auth?: AuthProvider, displayName?: Nullable<string>, description?: Nullable<string>, avatar?: Nullable<Blob>, banner?: Nullable<Blob>, clearBanner?: boolean, pinnedPost?: Nullable<RepoStrongRef>, clearPinnedPost?: boolean): ActorUpdateProfileRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorUpdateProfileRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorUpdateProfileRequest;
    }
}
export declare class ActorUpdateProfileResponse extends RepoPutRecordResponse.$metadata$.constructor {
    constructor();
}
export declare namespace ActorUpdateProfileResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorUpdateProfileResponse;
    }
}
export declare class FeedCreateBookmarkRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, uri: string, cid: string);
    get auth(): AuthProvider;
    get uri(): string;
    get cid(): string;
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, uri?: string, cid?: string): FeedCreateBookmarkRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedCreateBookmarkRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedCreateBookmarkRequest;
    }
}
export declare class FeedDeleteBookmarkRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, uri: string);
    get auth(): AuthProvider;
    get uri(): string;
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, uri?: string): FeedDeleteBookmarkRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedDeleteBookmarkRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDeleteBookmarkRequest;
    }
}
export declare class FeedDeleteLikeRequest extends AuthRequest.$metadata$.constructor implements RKeyRequest {
    constructor(auth: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get rkey(): Nullable<string>;
    set rkey(value: Nullable<string>);
    copy(auth?: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>): FeedDeleteLikeRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    readonly __doNotUseOrImplementIt: RKeyRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedDeleteLikeRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDeleteLikeRequest;
    }
}
export declare class FeedDeletePostRequest extends AuthRequest.$metadata$.constructor implements RKeyRequest {
    constructor(auth: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get rkey(): Nullable<string>;
    set rkey(value: Nullable<string>);
    copy(auth?: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>): FeedDeletePostRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    readonly __doNotUseOrImplementIt: RKeyRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedDeletePostRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDeletePostRequest;
    }
}
export declare class FeedDeleteRepostRequest extends AuthRequest.$metadata$.constructor implements RKeyRequest {
    constructor(auth: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get rkey(): Nullable<string>;
    set rkey(value: Nullable<string>);
    copy(auth?: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>): FeedDeleteRepostRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    readonly __doNotUseOrImplementIt: RKeyRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedDeleteRepostRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDeleteRepostRequest;
    }
}
export declare class FeedGetActorFeedsRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetActorFeedsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetActorFeedsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetActorFeedsRequest;
    }
}
export declare class FeedGetActorFeedsResponse {
    constructor(cursor?: Nullable<string>, feeds?: KtList<FeedDefsGeneratorView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get feeds(): KtList<FeedDefsGeneratorView>;
    set feeds(value: KtList<FeedDefsGeneratorView>);
    copy(cursor?: Nullable<string>, feeds?: KtList<FeedDefsGeneratorView>): FeedGetActorFeedsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetActorFeedsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetActorFeedsResponse;
    }
}
export declare class FeedGetActorLikesRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetActorLikesRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetActorLikesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetActorLikesRequest;
    }
}
export declare class FeedGetActorLikesResponse {
    constructor(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get feed(): KtList<FeedDefsFeedViewPost>;
    set feed(value: KtList<FeedDefsFeedViewPost>);
    copy(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>): FeedGetActorLikesResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetActorLikesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetActorLikesResponse;
    }
}
export declare class FeedGetAuthorFeedRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: string, limit?: Nullable<number>, cursor?: Nullable<string>, filter?: Nullable<FeedGetAuthorFeedRequest.Filter>, includePins?: boolean);
    get auth(): AuthProvider;
    get actor(): string;
    set actor(value: string);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get filter(): Nullable<FeedGetAuthorFeedRequest.Filter>;
    set filter(value: Nullable<FeedGetAuthorFeedRequest.Filter>);
    get includePins(): boolean;
    set includePins(value: boolean);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: string, limit?: Nullable<number>, cursor?: Nullable<string>, filter?: Nullable<FeedGetAuthorFeedRequest.Filter>, includePins?: boolean): FeedGetAuthorFeedRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetAuthorFeedRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetAuthorFeedRequest;
    }
    abstract class Filter {
        private constructor();
        static get PostsWithReplies(): FeedGetAuthorFeedRequest.Filter & {
            get name(): "PostsWithReplies";
            get ordinal(): 0;
        };
        static get PostsNoReplies(): FeedGetAuthorFeedRequest.Filter & {
            get name(): "PostsNoReplies";
            get ordinal(): 1;
        };
        static get PostsWithMedia(): FeedGetAuthorFeedRequest.Filter & {
            get name(): "PostsWithMedia";
            get ordinal(): 2;
        };
        static get PostsWithVideo(): FeedGetAuthorFeedRequest.Filter & {
            get name(): "PostsWithVideo";
            get ordinal(): 3;
        };
        static get PostsAndAuthorThreads(): FeedGetAuthorFeedRequest.Filter & {
            get name(): "PostsAndAuthorThreads";
            get ordinal(): 4;
        };
        get name(): "PostsWithReplies" | "PostsNoReplies" | "PostsWithMedia" | "PostsWithVideo" | "PostsAndAuthorThreads";
        get ordinal(): 0 | 1 | 2 | 3 | 4;
        get value(): string;
        static values(): Array<FeedGetAuthorFeedRequest.Filter>;
        static valueOf(value: string): FeedGetAuthorFeedRequest.Filter;
    }
    namespace Filter {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Filter;
        }
    }
}
export declare class FeedGetAuthorFeedResponse {
    constructor(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get feed(): KtList<FeedDefsFeedViewPost>;
    set feed(value: KtList<FeedDefsFeedViewPost>);
    copy(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>): FeedGetAuthorFeedResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetAuthorFeedResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetAuthorFeedResponse;
    }
}
export declare class FeedGetBookmarksRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get limit(): Nullable<number>;
    get cursor(): Nullable<string>;
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetBookmarksRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetBookmarksRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetBookmarksRequest;
    }
}
export declare class FeedGetBookmarksResponse {
    constructor(cursor: Nullable<string> | undefined, bookmarks: KtList<FeedDefsBookmarkView>);
    get cursor(): Nullable<string>;
    get bookmarks(): KtList<FeedDefsBookmarkView>;
    copy(cursor?: Nullable<string>, bookmarks?: KtList<FeedDefsBookmarkView>): FeedGetBookmarksResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetBookmarksResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetBookmarksResponse;
    }
}
export declare class FeedGetFeedGeneratorRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, feed?: Nullable<string>);
    get auth(): AuthProvider;
    get feed(): Nullable<string>;
    set feed(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, feed?: Nullable<string>): FeedGetFeedGeneratorRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetFeedGeneratorRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetFeedGeneratorRequest;
    }
}
export declare class FeedGetFeedGeneratorResponse {
    constructor(view?: Nullable<FeedDefsGeneratorView>, online?: Nullable<boolean>, valid?: Nullable<boolean>);
    get view(): Nullable<FeedDefsGeneratorView>;
    set view(value: Nullable<FeedDefsGeneratorView>);
    get online(): Nullable<boolean>;
    set online(value: Nullable<boolean>);
    get valid(): Nullable<boolean>;
    set valid(value: Nullable<boolean>);
    copy(view?: Nullable<FeedDefsGeneratorView>, online?: Nullable<boolean>, valid?: Nullable<boolean>): FeedGetFeedGeneratorResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetFeedGeneratorResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetFeedGeneratorResponse;
    }
}
export declare class FeedGetFeedGeneratorsRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, feeds?: Nullable<KtList<string>>);
    get auth(): AuthProvider;
    get feeds(): Nullable<KtList<string>>;
    set feeds(value: Nullable<KtList<string>>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, feeds?: Nullable<KtList<string>>): FeedGetFeedGeneratorsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetFeedGeneratorsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetFeedGeneratorsRequest;
    }
}
export declare class FeedGetFeedGeneratorsResponse {
    constructor(feeds?: KtList<FeedDefsGeneratorView>);
    get feeds(): KtList<FeedDefsGeneratorView>;
    set feeds(value: KtList<FeedDefsGeneratorView>);
    copy(feeds?: KtList<FeedDefsGeneratorView>): FeedGetFeedGeneratorsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetFeedGeneratorsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetFeedGeneratorsResponse;
    }
}
export declare class FeedGetFeedRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, feed?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get feed(): Nullable<string>;
    set feed(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, feed?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetFeedRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetFeedRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetFeedRequest;
    }
}
export declare class FeedGetFeedResponse {
    constructor(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get feed(): KtList<FeedDefsFeedViewPost>;
    set feed(value: KtList<FeedDefsFeedViewPost>);
    copy(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>): FeedGetFeedResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetFeedResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetFeedResponse;
    }
}
export declare class FeedGetLikesRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, uri?: string, cid?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): string;
    set uri(value: string);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, uri?: string, cid?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetLikesRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetLikesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetLikesRequest;
    }
}
export declare class FeedGetLikesResponse {
    constructor(uri?: string, cid?: Nullable<string>, cursor?: Nullable<string>, likes?: KtList<FeedGetLikesLike>);
    get uri(): string;
    set uri(value: string);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get likes(): KtList<FeedGetLikesLike>;
    set likes(value: KtList<FeedGetLikesLike>);
    copy(uri?: string, cid?: Nullable<string>, cursor?: Nullable<string>, likes?: KtList<FeedGetLikesLike>): FeedGetLikesResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetLikesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetLikesResponse;
    }
}
export declare class FeedGetListFeedRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, list?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get list(): Nullable<string>;
    set list(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, list?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetListFeedRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetListFeedRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetListFeedRequest;
    }
}
export declare class FeedGetListFeedResponse {
    constructor(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get feed(): KtList<FeedDefsFeedViewPost>;
    set feed(value: KtList<FeedDefsFeedViewPost>);
    copy(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>): FeedGetListFeedResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetListFeedResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetListFeedResponse;
    }
}
export declare class FeedGetPostThreadRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, uri?: string, depth?: Nullable<number>);
    get auth(): AuthProvider;
    get uri(): string;
    set uri(value: string);
    get depth(): Nullable<number>;
    set depth(value: Nullable<number>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, uri?: string, depth?: Nullable<number>): FeedGetPostThreadRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetPostThreadRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetPostThreadRequest;
    }
}
export declare class FeedGetPostThreadResponse {
    constructor(thread?: Nullable<FeedDefsThreadUnion>);
    get thread(): Nullable<FeedDefsThreadUnion>;
    set thread(value: Nullable<FeedDefsThreadUnion>);
    copy(thread?: Nullable<FeedDefsThreadUnion>): FeedGetPostThreadResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetPostThreadResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetPostThreadResponse;
    }
}
export declare class FeedGetPostsRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, uris?: Nullable<KtList<string>>);
    get auth(): AuthProvider;
    get uris(): Nullable<KtList<string>>;
    set uris(value: Nullable<KtList<string>>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, uris?: Nullable<KtList<string>>): FeedGetPostsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetPostsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetPostsRequest;
    }
}
export declare class FeedGetPostsResponse {
    constructor(posts?: KtList<FeedDefsPostView>);
    get posts(): KtList<FeedDefsPostView>;
    set posts(value: KtList<FeedDefsPostView>);
    copy(posts?: KtList<FeedDefsPostView>): FeedGetPostsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetPostsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetPostsResponse;
    }
}
export declare class FeedGetQuotesRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, uri?: string, cid?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): string;
    set uri(value: string);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, uri?: string, cid?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetQuotesRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetQuotesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetQuotesRequest;
    }
}
export declare class FeedGetQuotesResponse {
    constructor(uri?: string, cid?: Nullable<string>, cursor?: Nullable<string>, posts?: KtList<FeedDefsPostView>);
    get uri(): string;
    set uri(value: string);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get posts(): KtList<FeedDefsPostView>;
    set posts(value: KtList<FeedDefsPostView>);
    copy(uri?: string, cid?: Nullable<string>, cursor?: Nullable<string>, posts?: KtList<FeedDefsPostView>): FeedGetQuotesResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetQuotesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetQuotesResponse;
    }
}
export declare class FeedGetRepostedByRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, uri?: string, cid?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): string;
    set uri(value: string);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, uri?: string, cid?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetRepostedByRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetRepostedByRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetRepostedByRequest;
    }
}
export declare class FeedGetRepostedByResponse {
    constructor(uri?: string, cid?: Nullable<string>, cursor?: Nullable<string>, repostedBy?: KtList<ActorDefsProfileView>);
    get uri(): string;
    set uri(value: string);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get repostedBy(): KtList<ActorDefsProfileView>;
    set repostedBy(value: KtList<ActorDefsProfileView>);
    copy(uri?: string, cid?: Nullable<string>, cursor?: Nullable<string>, repostedBy?: KtList<ActorDefsProfileView>): FeedGetRepostedByResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetRepostedByResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetRepostedByResponse;
    }
}
export declare class FeedGetTimelineRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, algorithm?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get algorithm(): Nullable<string>;
    set algorithm(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, algorithm?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): FeedGetTimelineRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedGetTimelineRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetTimelineRequest;
    }
}
export declare class FeedGetTimelineResponse {
    constructor(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get feed(): KtList<FeedDefsFeedViewPost>;
    set feed(value: KtList<FeedDefsFeedViewPost>);
    copy(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>): FeedGetTimelineResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetTimelineResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetTimelineResponse;
    }
}
export declare class FeedLikeRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, subject?: Nullable<RepoStrongRef>, createdAt?: Nullable<string>, via?: Nullable<RepoStrongRef>);
    get auth(): AuthProvider;
    get subject(): Nullable<RepoStrongRef>;
    set subject(value: Nullable<RepoStrongRef>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get via(): Nullable<RepoStrongRef>;
    toMap(): KtMap<string, any>;
    toLike(): FeedLike;
    copy(auth?: AuthProvider, subject?: Nullable<RepoStrongRef>, createdAt?: Nullable<string>, via?: Nullable<RepoStrongRef>): FeedLikeRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedLikeRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedLikeRequest;
    }
}
export declare class FeedLikeResponse extends RepoCreateRecordResponse.$metadata$.constructor {
    constructor();
}
export declare namespace FeedLikeResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedLikeResponse;
    }
}
export declare class FeedPostRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, text?: string, langs?: Nullable<KtList<string>>, labels?: Nullable<LabelDefsSelfLabels>, facets?: Nullable<KtList<RichtextFacet>>, reply?: Nullable<FeedPostReplyRef>, embed?: Nullable<EmbedUnion>, createdAt?: Nullable<string>, via?: Nullable<string>);
    get auth(): AuthProvider;
    get text(): string;
    set text(value: string);
    get langs(): Nullable<KtList<string>>;
    set langs(value: Nullable<KtList<string>>);
    get labels(): Nullable<LabelDefsSelfLabels>;
    set labels(value: Nullable<LabelDefsSelfLabels>);
    get facets(): Nullable<KtList<RichtextFacet>>;
    set facets(value: Nullable<KtList<RichtextFacet>>);
    get reply(): Nullable<FeedPostReplyRef>;
    set reply(value: Nullable<FeedPostReplyRef>);
    get embed(): Nullable<EmbedUnion>;
    set embed(value: Nullable<EmbedUnion>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get via(): Nullable<string>;
    set via(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    toPost(): FeedPost;
    copy(auth?: AuthProvider, text?: string, langs?: Nullable<KtList<string>>, labels?: Nullable<LabelDefsSelfLabels>, facets?: Nullable<KtList<RichtextFacet>>, reply?: Nullable<FeedPostReplyRef>, embed?: Nullable<EmbedUnion>, createdAt?: Nullable<string>, via?: Nullable<string>): FeedPostRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedPostRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPostRequest;
    }
}
export declare class FeedPostResponse extends RepoCreateRecordResponse.$metadata$.constructor {
    constructor();
}
export declare namespace FeedPostResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPostResponse;
    }
}
export declare class FeedPostgateRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, createdAt?: Nullable<string>, post?: string, detachedEmbeddingUris?: Nullable<KtList<string>>, embeddingRules?: Nullable<KtList<FeedPostgateEmbeddingRulesUnion>>);
    get auth(): AuthProvider;
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get post(): string;
    set post(value: string);
    get detachedEmbeddingUris(): Nullable<KtList<string>>;
    set detachedEmbeddingUris(value: Nullable<KtList<string>>);
    get embeddingRules(): Nullable<KtList<FeedPostgateEmbeddingRulesUnion>>;
    set embeddingRules(value: Nullable<KtList<FeedPostgateEmbeddingRulesUnion>>);
    toMap(): KtMap<string, any>;
    toPostgate(): FeedPostgate;
    copy(auth?: AuthProvider, createdAt?: Nullable<string>, post?: string, detachedEmbeddingUris?: Nullable<KtList<string>>, embeddingRules?: Nullable<KtList<FeedPostgateEmbeddingRulesUnion>>): FeedPostgateRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedPostgateRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPostgateRequest;
    }
}
export declare class FeedPostgateResponse extends RepoCreateRecordResponse.$metadata$.constructor {
    constructor();
}
export declare namespace FeedPostgateResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPostgateResponse;
    }
}
export declare class FeedRepostRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, subject?: Nullable<RepoStrongRef>, createdAt?: Nullable<string>, via?: Nullable<RepoStrongRef>);
    get auth(): AuthProvider;
    get subject(): Nullable<RepoStrongRef>;
    set subject(value: Nullable<RepoStrongRef>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get via(): Nullable<RepoStrongRef>;
    toMap(): KtMap<string, any>;
    toRepost(): FeedRepost;
    copy(auth?: AuthProvider, subject?: Nullable<RepoStrongRef>, createdAt?: Nullable<string>, via?: Nullable<RepoStrongRef>): FeedRepostRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedRepostRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedRepostRequest;
    }
}
export declare class FeedRepostResponse extends RepoCreateRecordResponse.$metadata$.constructor {
    constructor();
}
export declare namespace FeedRepostResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedRepostResponse;
    }
}
export declare class FeedSearchPostsRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, q: string, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get q(): string;
    set q(value: string);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, q?: string, limit?: Nullable<number>, cursor?: Nullable<string>): FeedSearchPostsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedSearchPostsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedSearchPostsRequest;
    }
}
export declare class FeedSearchPostsResponse {
    constructor(cursor?: Nullable<string>, hitsTotal?: Nullable<number>, posts?: KtList<FeedDefsPostView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get hitsTotal(): Nullable<number>;
    set hitsTotal(value: Nullable<number>);
    get posts(): KtList<FeedDefsPostView>;
    set posts(value: KtList<FeedDefsPostView>);
    copy(cursor?: Nullable<string>, hitsTotal?: Nullable<number>, posts?: KtList<FeedDefsPostView>): FeedSearchPostsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedSearchPostsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedSearchPostsResponse;
    }
}
export declare class FeedThreadgateRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, createdAt?: Nullable<string>, post?: string, allow?: Nullable<KtList<FeedThreadgateAllowUnion>>);
    get auth(): AuthProvider;
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get post(): string;
    set post(value: string);
    get allow(): Nullable<KtList<FeedThreadgateAllowUnion>>;
    set allow(value: Nullable<KtList<FeedThreadgateAllowUnion>>);
    toMap(): KtMap<string, any>;
    toThreadgate(): FeedThreadgate;
    copy(auth?: AuthProvider, createdAt?: Nullable<string>, post?: string, allow?: Nullable<KtList<FeedThreadgateAllowUnion>>): FeedThreadgateRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace FeedThreadgateRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedThreadgateRequest;
    }
}
export declare class FeedThreadgateResponse extends RepoCreateRecordResponse.$metadata$.constructor {
    constructor();
}
export declare namespace FeedThreadgateResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedThreadgateResponse;
    }
}
export declare class GraphAddUserToListRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, userDid?: Nullable<string>, listUri?: Nullable<string>, createdAt?: Nullable<string>);
    get auth(): AuthProvider;
    get userDid(): Nullable<string>;
    set userDid(value: Nullable<string>);
    get listUri(): Nullable<string>;
    set listUri(value: Nullable<string>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    toListItem(): GraphListItem;
    copy(auth?: AuthProvider, userDid?: Nullable<string>, listUri?: Nullable<string>, createdAt?: Nullable<string>): GraphAddUserToListRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphAddUserToListRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphAddUserToListRequest;
    }
}
export declare class GraphBlockRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, subject?: Nullable<string>, createdAt?: Nullable<string>);
    get auth(): AuthProvider;
    get subject(): Nullable<string>;
    set subject(value: Nullable<string>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    toBlock(): GraphBlock;
    copy(auth?: AuthProvider, subject?: Nullable<string>, createdAt?: Nullable<string>): GraphBlockRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphBlockRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphBlockRequest;
    }
}
export declare class GraphCreateListRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, purpose: string | undefined, name: string, description: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, avatar?: Nullable<Blob>, labels?: Nullable<LabelDefsSelfLabels>, createdAt?: Nullable<string>);
    get auth(): AuthProvider;
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    toRecord(): GraphList;
    copy(auth?: AuthProvider, purpose?: string, name?: string, description?: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, avatar?: Nullable<Blob>, labels?: Nullable<LabelDefsSelfLabels>, createdAt?: Nullable<string>): GraphCreateListRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphCreateListRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphCreateListRequest;
    }
}
export declare class GraphDeleteBlockRequest extends AuthRequest.$metadata$.constructor implements RKeyRequest {
    constructor(auth: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get rkey(): Nullable<string>;
    set rkey(value: Nullable<string>);
    copy(auth?: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>): GraphDeleteBlockRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    readonly __doNotUseOrImplementIt: RKeyRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphDeleteBlockRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDeleteBlockRequest;
    }
}
export declare class GraphDeleteFollowRequest extends AuthRequest.$metadata$.constructor implements RKeyRequest {
    constructor(auth: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get rkey(): Nullable<string>;
    set rkey(value: Nullable<string>);
    copy(auth?: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>): GraphDeleteFollowRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    readonly __doNotUseOrImplementIt: RKeyRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphDeleteFollowRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDeleteFollowRequest;
    }
}
export declare class GraphDeleteListRequest extends AuthRequest.$metadata$.constructor {
    constructor(auth: AuthProvider, listUri: string);
    get auth(): AuthProvider;
    get listUri(): string;
    copy(auth?: AuthProvider, listUri?: string): GraphDeleteListRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphDeleteListRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDeleteListRequest;
    }
}
export declare class GraphEditListRequest extends AuthRequest.$metadata$.constructor {
    constructor(auth: AuthProvider, listUri: string, name: string, description: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, avatar?: Nullable<Blob>, labels?: Nullable<LabelDefsSelfLabels>);
    get auth(): AuthProvider;
    get listUri(): string;
    get name(): string;
    get description(): Nullable<string>;
    get descriptionFacets(): Nullable<KtList<RichtextFacet>>;
    get avatar(): Nullable<Blob>;
    get labels(): Nullable<LabelDefsSelfLabels>;
    set labels(value: Nullable<LabelDefsSelfLabels>);
    copy(auth?: AuthProvider, listUri?: string, name?: string, description?: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, avatar?: Nullable<Blob>, labels?: Nullable<LabelDefsSelfLabels>): GraphEditListRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphEditListRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphEditListRequest;
    }
}
export declare class GraphEditListResponse extends RepoPutRecordResponse.$metadata$.constructor {
    constructor();
}
export declare namespace GraphEditListResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphEditListResponse;
    }
}
export declare class GraphFollowRequest extends AuthRequest.$metadata$.constructor implements MapRequest, RecordRequest {
    constructor(auth: AuthProvider, subject?: Nullable<string>, createdAt?: Nullable<string>);
    get auth(): AuthProvider;
    get subject(): Nullable<string>;
    set subject(value: Nullable<string>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    toFollow(): GraphFollow;
    copy(auth?: AuthProvider, subject?: Nullable<string>, createdAt?: Nullable<string>): GraphFollowRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"] & RecordRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphFollowRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphFollowRequest;
    }
}
export declare class GraphFollowResponse extends RepoCreateRecordResponse.$metadata$.constructor {
    constructor();
}
export declare namespace GraphFollowResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphFollowResponse;
    }
}
export declare class GraphGetBlocksRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>): GraphGetBlocksRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetBlocksRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetBlocksRequest;
    }
}
export declare class GraphGetBlocksResponse {
    constructor(cursor?: Nullable<string>, blocks?: KtList<ActorDefsProfileView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get blocks(): KtList<ActorDefsProfileView>;
    set blocks(value: KtList<ActorDefsProfileView>);
    copy(cursor?: Nullable<string>, blocks?: KtList<ActorDefsProfileView>): GraphGetBlocksResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetBlocksResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetBlocksResponse;
    }
}
export declare class GraphGetFollowersRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): GraphGetFollowersRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetFollowersRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetFollowersRequest;
    }
}
export declare class GraphGetFollowersResponse {
    constructor(cursor?: Nullable<string>, subject?: ActorDefsProfileView, followers?: KtList<ActorDefsProfileView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get subject(): ActorDefsProfileView;
    set subject(value: ActorDefsProfileView);
    get followers(): KtList<ActorDefsProfileView>;
    set followers(value: KtList<ActorDefsProfileView>);
    copy(cursor?: Nullable<string>, subject?: ActorDefsProfileView, followers?: KtList<ActorDefsProfileView>): GraphGetFollowersResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetFollowersResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetFollowersResponse;
    }
}
export declare class GraphGetFollowsRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): GraphGetFollowsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetFollowsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetFollowsRequest;
    }
}
export declare class GraphGetFollowsResponse {
    constructor(cursor?: Nullable<string>, subject?: ActorDefsProfileView, follows?: KtList<ActorDefsProfileView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get subject(): ActorDefsProfileView;
    set subject(value: ActorDefsProfileView);
    get follows(): KtList<ActorDefsProfileView>;
    set follows(value: KtList<ActorDefsProfileView>);
    copy(cursor?: Nullable<string>, subject?: ActorDefsProfileView, follows?: KtList<ActorDefsProfileView>): GraphGetFollowsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetFollowsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetFollowsResponse;
    }
}
export declare class GraphGetKnownFollowersRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): GraphGetKnownFollowersRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetKnownFollowersRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetKnownFollowersRequest;
    }
}
export declare class GraphGetKnownFollowersResponse {
    constructor(cursor?: Nullable<string>, subject?: ActorDefsProfileView, followers?: KtList<ActorDefsProfileView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get subject(): ActorDefsProfileView;
    set subject(value: ActorDefsProfileView);
    get followers(): KtList<ActorDefsProfileView>;
    set followers(value: KtList<ActorDefsProfileView>);
    copy(cursor?: Nullable<string>, subject?: ActorDefsProfileView, followers?: KtList<ActorDefsProfileView>): GraphGetKnownFollowersResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetKnownFollowersResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetKnownFollowersResponse;
    }
}
export declare class GraphGetListRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, list?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get list(): Nullable<string>;
    set list(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, list?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): GraphGetListRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetListRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetListRequest;
    }
}
export declare class GraphGetListResponse {
    constructor(cursor?: Nullable<string>, list?: GraphDefsListView, items?: KtList<GraphDefsListItemView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get list(): GraphDefsListView;
    set list(value: GraphDefsListView);
    get items(): KtList<GraphDefsListItemView>;
    set items(value: KtList<GraphDefsListItemView>);
    copy(cursor?: Nullable<string>, list?: GraphDefsListView, items?: KtList<GraphDefsListItemView>): GraphGetListResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetListResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetListResponse;
    }
}
export declare class GraphGetListsRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>, limit?: Nullable<number>, cursor?: Nullable<string>): GraphGetListsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetListsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetListsRequest;
    }
}
export declare class GraphGetListsResponse {
    constructor(cursor?: Nullable<string>, lists?: KtList<GraphDefsListView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get lists(): KtList<GraphDefsListView>;
    set lists(value: KtList<GraphDefsListView>);
    copy(cursor?: Nullable<string>, lists?: KtList<GraphDefsListView>): GraphGetListsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetListsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetListsResponse;
    }
}
export declare class GraphGetMutesRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>): GraphGetMutesRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetMutesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetMutesRequest;
    }
}
export declare class GraphGetMutesResponse {
    constructor(cursor?: Nullable<string>, mutes?: KtList<ActorDefsProfileView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get mutes(): KtList<ActorDefsProfileView>;
    set mutes(value: KtList<ActorDefsProfileView>);
    copy(cursor?: Nullable<string>, mutes?: KtList<ActorDefsProfileView>): GraphGetMutesResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetMutesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetMutesResponse;
    }
}
export declare class GraphGetStarterPackRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, starterPack?: Nullable<string>);
    get auth(): AuthProvider;
    get starterPack(): Nullable<string>;
    set starterPack(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, starterPack?: Nullable<string>): GraphGetStarterPackRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetStarterPackRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetStarterPackRequest;
    }
}
export declare class GraphGetStarterPackResponse {
    constructor(starterPack: GraphDefsStarterPackView);
    get starterPack(): GraphDefsStarterPackView;
    set starterPack(value: GraphDefsStarterPackView);
    copy(starterPack?: GraphDefsStarterPackView): GraphGetStarterPackResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetStarterPackResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetStarterPackResponse;
    }
}
export declare class GraphGetStarterPacksRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, uris?: Nullable<KtList<string>>);
    get auth(): AuthProvider;
    get uris(): Nullable<KtList<string>>;
    set uris(value: Nullable<KtList<string>>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, uris?: Nullable<KtList<string>>): GraphGetStarterPacksRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphGetStarterPacksRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetStarterPacksRequest;
    }
}
export declare class GraphGetStarterPacksResponse {
    constructor(starterPacks: KtList<GraphDefsStarterPackViewBasic>);
    get starterPacks(): KtList<GraphDefsStarterPackViewBasic>;
    set starterPacks(value: KtList<GraphDefsStarterPackViewBasic>);
    copy(starterPacks?: KtList<GraphDefsStarterPackViewBasic>): GraphGetStarterPacksResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphGetStarterPacksResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphGetStarterPacksResponse;
    }
}
export declare class GraphMuteActorRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>): GraphMuteActorRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphMuteActorRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphMuteActorRequest;
    }
}
export declare class GraphRemoveUserFromListRequest extends AuthRequest.$metadata$.constructor implements RKeyRequest {
    constructor(auth: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>);
    get auth(): AuthProvider;
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get rkey(): Nullable<string>;
    set rkey(value: Nullable<string>);
    copy(auth?: AuthProvider, uri?: Nullable<string>, rkey?: Nullable<string>): GraphRemoveUserFromListRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    readonly __doNotUseOrImplementIt: RKeyRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphRemoveUserFromListRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphRemoveUserFromListRequest;
    }
}
export declare class GraphUnmuteActorRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, actor?: Nullable<string>);
    get auth(): AuthProvider;
    get actor(): Nullable<string>;
    set actor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, actor?: Nullable<string>): GraphUnmuteActorRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace GraphUnmuteActorRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphUnmuteActorRequest;
    }
}
export declare class LabelerGetServicesRequest extends AuthRequest.$metadata$.constructor {
    constructor(auth: AuthProvider, dids?: KtList<string>, detailed?: Nullable<boolean>);
    get auth(): AuthProvider;
    get dids(): KtList<string>;
    set dids(value: KtList<string>);
    get detailed(): Nullable<boolean>;
    set detailed(value: Nullable<boolean>);
    copy(auth?: AuthProvider, dids?: KtList<string>, detailed?: Nullable<boolean>): LabelerGetServicesRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelerGetServicesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelerGetServicesRequest;
    }
}
export declare class LabelerGetServicesResponse {
    constructor(views?: KtList<LabelerViewUnion>);
    get views(): KtList<LabelerViewUnion>;
    set views(value: KtList<LabelerViewUnion>);
    copy(views?: KtList<LabelerViewUnion>): LabelerGetServicesResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelerGetServicesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelerGetServicesResponse;
    }
}
export declare class NotificationGetUnreadCountRequest extends AuthRequest.$metadata$.constructor {
    constructor(auth: AuthProvider);
    get auth(): AuthProvider;
    copy(auth?: AuthProvider): NotificationGetUnreadCountRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NotificationGetUnreadCountRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NotificationGetUnreadCountRequest;
    }
}
export declare class NotificationGetUnreadCountResponse {
    constructor(count?: number);
    get count(): number;
    set count(value: number);
    copy(count?: number): NotificationGetUnreadCountResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NotificationGetUnreadCountResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NotificationGetUnreadCountResponse;
    }
}
export declare class NotificationListNotificationsRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>): NotificationListNotificationsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace NotificationListNotificationsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NotificationListNotificationsRequest;
    }
}
export declare class NotificationListNotificationsResponse {
    constructor(cursor?: Nullable<string>, notifications?: KtList<NotificationListNotificationsNotification>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get notifications(): KtList<NotificationListNotificationsNotification>;
    set notifications(value: KtList<NotificationListNotificationsNotification>);
    copy(cursor?: Nullable<string>, notifications?: KtList<NotificationListNotificationsNotification>): NotificationListNotificationsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NotificationListNotificationsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NotificationListNotificationsResponse;
    }
}
export declare class NotificationUpdateSeenRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, seenAt?: Nullable<string>);
    get auth(): AuthProvider;
    get seenAt(): Nullable<string>;
    set seenAt(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, seenAt?: Nullable<string>): NotificationUpdateSeenRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace NotificationUpdateSeenRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NotificationUpdateSeenRequest;
    }
}
export declare class UnspeccedGetPopularRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, includeNsfw?: Nullable<boolean>, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get includeNsfw(): Nullable<boolean>;
    set includeNsfw(value: Nullable<boolean>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, includeNsfw?: Nullable<boolean>, limit?: Nullable<number>, cursor?: Nullable<string>): UnspeccedGetPopularRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace UnspeccedGetPopularRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UnspeccedGetPopularRequest;
    }
}
export declare class UnspeccedGetPopularResponse {
    constructor(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get feed(): KtList<FeedDefsFeedViewPost>;
    set feed(value: KtList<FeedDefsFeedViewPost>);
    copy(cursor?: Nullable<string>, feed?: KtList<FeedDefsFeedViewPost>): UnspeccedGetPopularResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace UnspeccedGetPopularResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UnspeccedGetPopularResponse;
    }
}
export declare class UnspeccedSearchFeedsRequest implements MapRequest {
    constructor(q?: Nullable<string>);
    get q(): Nullable<string>;
    set q(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(q?: Nullable<string>): UnspeccedSearchFeedsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace UnspeccedSearchFeedsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UnspeccedSearchFeedsRequest;
    }
}
export declare class UnspeccedSearchFeedsResponse {
    constructor(cid?: Nullable<string>, tid?: Nullable<string>, user?: Nullable<UndocSearchFeedsUser>, post?: Nullable<UndocSearchFeedsPost>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get tid(): Nullable<string>;
    set tid(value: Nullable<string>);
    get user(): Nullable<UndocSearchFeedsUser>;
    set user(value: Nullable<UndocSearchFeedsUser>);
    get post(): Nullable<UndocSearchFeedsPost>;
    set post(value: Nullable<UndocSearchFeedsPost>);
    copy(cid?: Nullable<string>, tid?: Nullable<string>, user?: Nullable<UndocSearchFeedsUser>, post?: Nullable<UndocSearchFeedsPost>): UnspeccedSearchFeedsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace UnspeccedSearchFeedsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UnspeccedSearchFeedsResponse;
    }
}
export declare class VideoGetJobStatusRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, jobId: string);
    get auth(): AuthProvider;
    get jobId(): string;
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, jobId?: string): VideoGetJobStatusRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace VideoGetJobStatusRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => VideoGetJobStatusRequest;
    }
}
export declare class VideoGetJobStatusResponse {
    constructor(jobStatus: JobStatus);
    get jobStatus(): JobStatus;
    set jobStatus(value: JobStatus);
    copy(jobStatus?: JobStatus): VideoGetJobStatusResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace VideoGetJobStatusResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => VideoGetJobStatusResponse;
    }
}
export declare class VideoGetUploadLimitsRequest extends AuthRequest.$metadata$.constructor {
    constructor(auth: AuthProvider);
    get auth(): AuthProvider;
    copy(auth?: AuthProvider): VideoGetUploadLimitsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace VideoGetUploadLimitsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => VideoGetUploadLimitsRequest;
    }
}
export declare class VideoGetUploadLimitsResponse {
    constructor(canUpload: boolean, remainingDailyVideos?: Nullable<number>, remainingDailyBytes?: Nullable<bigint>, message?: Nullable<string>, error?: Nullable<string>);
    get canUpload(): boolean;
    get remainingDailyVideos(): Nullable<number>;
    get remainingDailyBytes(): Nullable<bigint>;
    get message(): Nullable<string>;
    get error(): Nullable<string>;
    copy(canUpload?: boolean, remainingDailyVideos?: Nullable<number>, remainingDailyBytes?: Nullable<bigint>, message?: Nullable<string>, error?: Nullable<string>): VideoGetUploadLimitsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace VideoGetUploadLimitsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => VideoGetUploadLimitsResponse;
    }
}
export declare class VideoUploadVideoRequest extends AuthRequest.$metadata$.constructor {
    constructor(auth: AuthProvider, bytes: Int8Array, name?: string, contentType?: string);
    get auth(): AuthProvider;
    get bytes(): Int8Array;
    set bytes(value: Int8Array);
    get name(): string;
    set name(value: string);
    get contentType(): string;
    set contentType(value: string);
    copy(auth?: AuthProvider, bytes?: Int8Array, name?: string, contentType?: string): VideoUploadVideoRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace VideoUploadVideoRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => VideoUploadVideoRequest;
    }
}
export declare class ConvoAddReactionRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId: string, messageId: string, value: string);
    get auth(): AuthProvider;
    get convoId(): string;
    get messageId(): string;
    get value(): string;
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string, messageId?: string, value?: string): ConvoAddReactionRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoAddReactionRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoAddReactionRequest;
    }
}
export declare class ConvoAddReactionResponse {
    constructor(message: ConvoDefsMessageView);
    get message(): ConvoDefsMessageView;
    copy(message?: ConvoDefsMessageView): ConvoAddReactionResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoAddReactionResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoAddReactionResponse;
    }
}
export declare class ConvoDeleteMessageForSelfRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId?: string, messageId?: string);
    get auth(): AuthProvider;
    get convoId(): string;
    set convoId(value: string);
    get messageId(): string;
    set messageId(value: string);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string, messageId?: string): ConvoDeleteMessageForSelfRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoDeleteMessageForSelfRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDeleteMessageForSelfRequest;
    }
}
export declare class ConvoGetConvoForMembersRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, members?: KtList<string>);
    get auth(): AuthProvider;
    get members(): KtList<string>;
    set members(value: KtList<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, members?: KtList<string>): ConvoGetConvoForMembersRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoGetConvoForMembersRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetConvoForMembersRequest;
    }
}
export declare class ConvoGetConvoForMembersResponse {
    constructor(convo: ConvoDefsConvoView);
    get convo(): ConvoDefsConvoView;
    set convo(value: ConvoDefsConvoView);
    copy(convo?: ConvoDefsConvoView): ConvoGetConvoForMembersResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoGetConvoForMembersResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetConvoForMembersResponse;
    }
}
export declare class ConvoGetConvoRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId?: string);
    get auth(): AuthProvider;
    get convoId(): string;
    set convoId(value: string);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string): ConvoGetConvoRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoGetConvoRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetConvoRequest;
    }
}
export declare class ConvoGetConvoResponse {
    constructor(convo: ConvoDefsConvoView);
    get convo(): ConvoDefsConvoView;
    set convo(value: ConvoDefsConvoView);
    copy(convo?: ConvoDefsConvoView): ConvoGetConvoResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoGetConvoResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetConvoResponse;
    }
}
export declare class ConvoGetListConvosRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, limit?: Nullable<number>, cursor?: Nullable<string>): ConvoGetListConvosRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoGetListConvosRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetListConvosRequest;
    }
}
export declare class ConvoGetListConvosResponse {
    constructor(cursor: Nullable<string> | undefined, convos: KtList<ConvoDefsConvoView>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get convos(): KtList<ConvoDefsConvoView>;
    set convos(value: KtList<ConvoDefsConvoView>);
    copy(cursor?: Nullable<string>, convos?: KtList<ConvoDefsConvoView>): ConvoGetListConvosResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoGetListConvosResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetListConvosResponse;
    }
}
export declare class ConvoGetLogRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, cursor?: string);
    get auth(): AuthProvider;
    get cursor(): string;
    set cursor(value: string);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, cursor?: string): ConvoGetLogRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoGetLogRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetLogRequest;
    }
}
export declare class ConvoGetLogResponse {
    constructor(logs: KtList<ConvoDefsLogUnion>);
    get logs(): KtList<ConvoDefsLogUnion>;
    set logs(value: KtList<ConvoDefsLogUnion>);
    copy(logs?: KtList<ConvoDefsLogUnion>): ConvoGetLogResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoGetLogResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetLogResponse;
    }
}
export declare class ConvoGetMessagesRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId?: string, limit?: Nullable<number>, cursor?: Nullable<string>);
    get auth(): AuthProvider;
    get convoId(): string;
    set convoId(value: string);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string, limit?: Nullable<number>, cursor?: Nullable<string>): ConvoGetMessagesRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoGetMessagesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetMessagesRequest;
    }
}
export declare class ConvoGetMessagesResponse {
    constructor(cursor: Nullable<string> | undefined, messages: KtList<ConvoDefsMessageUnion>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get messages(): KtList<ConvoDefsMessageUnion>;
    set messages(value: KtList<ConvoDefsMessageUnion>);
    copy(cursor?: Nullable<string>, messages?: KtList<ConvoDefsMessageUnion>): ConvoGetMessagesResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoGetMessagesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoGetMessagesResponse;
    }
}
export declare class ConvoLeaveConvoRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId?: string);
    get auth(): AuthProvider;
    get convoId(): string;
    set convoId(value: string);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string): ConvoLeaveConvoRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoLeaveConvoRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoLeaveConvoRequest;
    }
}
export declare class ConvoLeaveConvoResponse {
    constructor(convoId: string, rev: string);
    get convoId(): string;
    set convoId(value: string);
    get rev(): string;
    set rev(value: string);
    copy(convoId?: string, rev?: string): ConvoLeaveConvoResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoLeaveConvoResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoLeaveConvoResponse;
    }
}
export declare class ConvoMuteConvoRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId?: string);
    get auth(): AuthProvider;
    get convoId(): string;
    set convoId(value: string);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string): ConvoMuteConvoRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoMuteConvoRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoMuteConvoRequest;
    }
}
export declare class ConvoMuteConvoResponse {
    constructor(convo: ConvoDefsConvoView);
    get convo(): ConvoDefsConvoView;
    set convo(value: ConvoDefsConvoView);
    copy(convo?: ConvoDefsConvoView): ConvoMuteConvoResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoMuteConvoResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoMuteConvoResponse;
    }
}
export declare class ConvoRemoveReactionRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId: string, messageId: string, value: string);
    get auth(): AuthProvider;
    get convoId(): string;
    get messageId(): string;
    get value(): string;
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string, messageId?: string, value?: string): ConvoRemoveReactionRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoRemoveReactionRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoRemoveReactionRequest;
    }
}
export declare class ConvoRemoveReactionResponse {
    constructor(message: ConvoDefsMessageView);
    get message(): ConvoDefsMessageView;
    copy(message?: ConvoDefsMessageView): ConvoRemoveReactionResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoRemoveReactionResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoRemoveReactionResponse;
    }
}
export declare class ConvoSendMessageRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId?: string, message?: Nullable<ConvoDefsMessageInput>);
    get auth(): AuthProvider;
    get convoId(): string;
    set convoId(value: string);
    get message(): Nullable<ConvoDefsMessageInput>;
    set message(value: Nullable<ConvoDefsMessageInput>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string, message?: Nullable<ConvoDefsMessageInput>): ConvoSendMessageRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoSendMessageRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoSendMessageRequest;
    }
}
export declare class ConvoUnmuteConvoRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId?: string);
    get auth(): AuthProvider;
    get convoId(): string;
    set convoId(value: string);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string): ConvoUnmuteConvoRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoUnmuteConvoRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoUnmuteConvoRequest;
    }
}
export declare class ConvoUnmuteConvoResponse {
    constructor(convo: ConvoDefsConvoView);
    get convo(): ConvoDefsConvoView;
    set convo(value: ConvoDefsConvoView);
    copy(convo?: ConvoDefsConvoView): ConvoUnmuteConvoResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoUnmuteConvoResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoUnmuteConvoResponse;
    }
}
export declare class ConvoUpdateReadRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, convoId?: string, messageId?: string);
    get auth(): AuthProvider;
    get convoId(): string;
    set convoId(value: string);
    get messageId(): string;
    set messageId(value: string);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, convoId?: string, messageId?: string): ConvoUpdateReadRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ConvoUpdateReadRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoUpdateReadRequest;
    }
}
export declare class ConvoUpdateReadResponse {
    constructor(convo: ConvoDefsConvoView);
    get convo(): ConvoDefsConvoView;
    set convo(value: ConvoDefsConvoView);
    copy(convo?: ConvoDefsConvoView): ConvoUpdateReadResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoUpdateReadResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoUpdateReadResponse;
    }
}
export declare class IdentityResolveHandleRequest implements MapRequest {
    constructor(handle?: Nullable<string>);
    get handle(): Nullable<string>;
    set handle(value: Nullable<string>);
    toMap(): KtMutableMap<string, any>;
    copy(handle?: Nullable<string>): IdentityResolveHandleRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace IdentityResolveHandleRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => IdentityResolveHandleRequest;
    }
}
export declare class IdentityResolveHandleResponse {
    constructor(did?: string);
    get did(): string;
    set did(value: string);
    copy(did?: string): IdentityResolveHandleResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace IdentityResolveHandleResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => IdentityResolveHandleResponse;
    }
}
export declare class ModerationCreateReportRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(reasonType: string, reason: Nullable<string> | undefined, subject: ModerationSubjectUnion, auth: AuthProvider);
    get reasonType(): string;
    get reason(): Nullable<string>;
    get subject(): ModerationSubjectUnion;
    get auth(): AuthProvider;
    toMap(): KtMap<string, any>;
    copy(reasonType?: string, reason?: Nullable<string>, subject?: ModerationSubjectUnion, auth?: AuthProvider): ModerationCreateReportRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ModerationCreateReportRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ModerationCreateReportRequest;
    }
}
export declare class ModerationCreateReportResponse extends ModerationReport.$metadata$.constructor {
    constructor();
}
export declare namespace ModerationCreateReportResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ModerationCreateReportResponse;
    }
}
export declare class RepoCreateRecordRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, repo: string, collection: string, record: RecordUnion, rkey?: Nullable<string>, validate?: Nullable<boolean>, swapCommit?: Nullable<string>);
    get auth(): AuthProvider;
    get repo(): string;
    set repo(value: string);
    get collection(): string;
    set collection(value: string);
    get record(): RecordUnion;
    set record(value: RecordUnion);
    get rkey(): Nullable<string>;
    set rkey(value: Nullable<string>);
    get validate(): Nullable<boolean>;
    set validate(value: Nullable<boolean>);
    get swapCommit(): Nullable<string>;
    set swapCommit(value: Nullable<string>);
    toMap(): KtMutableMap<string, any>;
    copy(auth?: AuthProvider, repo?: string, collection?: string, record?: RecordUnion, rkey?: Nullable<string>, validate?: Nullable<boolean>, swapCommit?: Nullable<string>): RepoCreateRecordRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace RepoCreateRecordRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoCreateRecordRequest;
    }
}
export declare class RepoCreateRecordResponse {
    constructor();
    get uri(): string;
    set uri(value: string);
    get cid(): string;
    set cid(value: string);
}
export declare namespace RepoCreateRecordResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoCreateRecordResponse;
    }
}
export declare class RepoDeleteRecordRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, repo: string, collection: string, rkey: string, swapRecord?: Nullable<string>, swapCommit?: Nullable<string>);
    get auth(): AuthProvider;
    get repo(): string;
    set repo(value: string);
    get collection(): string;
    set collection(value: string);
    get rkey(): string;
    set rkey(value: string);
    get swapRecord(): Nullable<string>;
    set swapRecord(value: Nullable<string>);
    get swapCommit(): Nullable<string>;
    set swapCommit(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, repo?: string, collection?: string, rkey?: string, swapRecord?: Nullable<string>, swapCommit?: Nullable<string>): RepoDeleteRecordRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace RepoDeleteRecordRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoDeleteRecordRequest;
    }
}
export declare class RepoDescribeRepoRequest implements MapRequest {
    constructor(repo: string);
    get repo(): string;
    toMap(): KtMap<string, any>;
    copy(repo?: string): RepoDescribeRepoRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace RepoDescribeRepoRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoDescribeRepoRequest;
    }
}
export declare class RepoDescribeRepoResponse {
    constructor(handle: string, did: string, didDoc?: Nullable<DidDocUnion>, collections?: Nullable<KtList<string>>, handleIsCorrect?: boolean);
    get handle(): string;
    get did(): string;
    get didDoc(): Nullable<DidDocUnion>;
    get collections(): Nullable<KtList<string>>;
    get handleIsCorrect(): boolean;
    copy(handle?: string, did?: string, didDoc?: Nullable<DidDocUnion>, collections?: Nullable<KtList<string>>, handleIsCorrect?: boolean): RepoDescribeRepoResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RepoDescribeRepoResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoDescribeRepoResponse;
    }
}
export declare class RepoGetRecordRequest implements MapRequest {
    constructor(repo: string, collection: string, rkey?: Nullable<string>, uri?: Nullable<string>, cid?: Nullable<string>);
    get repo(): string;
    set repo(value: string);
    get collection(): string;
    set collection(value: string);
    get rkey(): Nullable<string>;
    set rkey(value: Nullable<string>);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(repo?: string, collection?: string, rkey?: Nullable<string>, uri?: Nullable<string>, cid?: Nullable<string>): RepoGetRecordRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace RepoGetRecordRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoGetRecordRequest;
    }
}
export declare class RepoGetRecordResponse {
    constructor(uri: string | undefined, cid: Nullable<string> | undefined, value: RecordUnion);
    get uri(): string;
    set uri(value: string);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get value(): RecordUnion;
    set value(value: RecordUnion);
    copy(uri?: string, cid?: Nullable<string>, value?: RecordUnion): RepoGetRecordResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RepoGetRecordResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoGetRecordResponse;
    }
}
export declare class RepoListRecordsRequest implements MapRequest {
    constructor(repo: string, collection: string);
    get repo(): string;
    set repo(value: string);
    get collection(): string;
    set collection(value: string);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get reverse(): Nullable<boolean>;
    set reverse(value: Nullable<boolean>);
    get rkeyStart(): Nullable<string>;
    set rkeyStart(value: Nullable<string>);
    get rkeyEnd(): Nullable<string>;
    set rkeyEnd(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(repo?: string, collection?: string): RepoListRecordsRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace RepoListRecordsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoListRecordsRequest;
    }
}
export declare class RepoListRecordsResponse {
    constructor(cursor?: Nullable<string>, records?: KtList<RepoListRecordsRecord>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get records(): KtList<RepoListRecordsRecord>;
    set records(value: KtList<RepoListRecordsRecord>);
    copy(cursor?: Nullable<string>, records?: KtList<RepoListRecordsRecord>): RepoListRecordsResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RepoListRecordsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoListRecordsResponse;
    }
}
export declare class RepoPutRecordRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, repo: string, collection: string, rkey: string, record: RecordUnion);
    get auth(): AuthProvider;
    get repo(): string;
    set repo(value: string);
    get collection(): string;
    set collection(value: string);
    get rkey(): string;
    set rkey(value: string);
    get record(): RecordUnion;
    set record(value: RecordUnion);
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, repo?: string, collection?: string, rkey?: string, record?: RecordUnion): RepoPutRecordRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace RepoPutRecordRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoPutRecordRequest;
    }
}
export declare class RepoPutRecordResponse {
    constructor();
    get uri(): string;
    set uri(value: string);
    get cid(): string;
    set cid(value: string);
}
export declare namespace RepoPutRecordResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoPutRecordResponse;
    }
}
export declare class RepoUploadBlobRequest extends AuthRequest.$metadata$.constructor {
    constructor(auth: AuthProvider, bytes: Int8Array, name?: string, contentType?: string);
    get auth(): AuthProvider;
    get bytes(): Int8Array;
    set bytes(value: Int8Array);
    get name(): string;
    set name(value: string);
    get contentType(): string;
    set contentType(value: string);
    copy(auth?: AuthProvider, bytes?: Int8Array, name?: string, contentType?: string): RepoUploadBlobRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RepoUploadBlobRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoUploadBlobRequest;
    }
}
export declare class RepoUploadBlobResponse {
    constructor(blob?: Blob);
    get blob(): Blob;
    set blob(value: Blob);
    copy(blob?: Blob): RepoUploadBlobResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RepoUploadBlobResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoUploadBlobResponse;
    }
}
export declare class ServerCreateSessionRequest implements MapRequest {
    constructor(identifier?: Nullable<string>, password?: Nullable<string>);
    get identifier(): Nullable<string>;
    set identifier(value: Nullable<string>);
    get password(): Nullable<string>;
    set password(value: Nullable<string>);
    toMap(): KtMap<string, any>;
    copy(identifier?: Nullable<string>, password?: Nullable<string>): ServerCreateSessionRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ServerCreateSessionRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ServerCreateSessionRequest;
    }
}
export declare class ServerCreateSessionResponse {
    constructor(accessJwt?: string, refreshJwt?: string, handle?: string, did?: string, email?: Nullable<string>, emailConfirmed?: Nullable<boolean>, emailAuthFactor?: Nullable<boolean>, didDoc?: Nullable<DidDocUnion>, active?: Nullable<boolean>);
    get accessJwt(): string;
    set accessJwt(value: string);
    get refreshJwt(): string;
    set refreshJwt(value: string);
    get handle(): string;
    set handle(value: string);
    get did(): string;
    set did(value: string);
    get email(): Nullable<string>;
    set email(value: Nullable<string>);
    get emailConfirmed(): Nullable<boolean>;
    set emailConfirmed(value: Nullable<boolean>);
    get emailAuthFactor(): Nullable<boolean>;
    set emailAuthFactor(value: Nullable<boolean>);
    get didDoc(): Nullable<DidDocUnion>;
    set didDoc(value: Nullable<DidDocUnion>);
    get active(): Nullable<boolean>;
    set active(value: Nullable<boolean>);
    copy(accessJwt?: string, refreshJwt?: string, handle?: string, did?: string, email?: Nullable<string>, emailConfirmed?: Nullable<boolean>, emailAuthFactor?: Nullable<boolean>, didDoc?: Nullable<DidDocUnion>, active?: Nullable<boolean>): ServerCreateSessionResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ServerCreateSessionResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ServerCreateSessionResponse;
    }
}
export declare class ServerGetServiceAuthRequest extends AuthRequest.$metadata$.constructor implements MapRequest {
    constructor(auth: AuthProvider, aud: string, exp?: Nullable<bigint>, lxm?: Nullable<string>);
    get auth(): AuthProvider;
    get aud(): string;
    get exp(): Nullable<bigint>;
    get lxm(): Nullable<string>;
    toMap(): KtMap<string, any>;
    copy(auth?: AuthProvider, aud?: string, exp?: Nullable<bigint>, lxm?: Nullable<string>): ServerGetServiceAuthRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace ServerGetServiceAuthRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ServerGetServiceAuthRequest;
    }
}
export declare class ServerGetServiceAuthResponse {
    constructor(token?: string);
    get token(): string;
    set token(value: string);
    copy(token?: string): ServerGetServiceAuthResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ServerGetServiceAuthResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ServerGetServiceAuthResponse;
    }
}
export declare class ServerGetSessionResponse {
    constructor(handle?: string, did?: string, email?: Nullable<string>, emailConfirmed?: Nullable<boolean>, emailAuthFactor?: Nullable<boolean>, didDoc?: Nullable<DidDocUnion>, active?: Nullable<boolean>);
    get handle(): string;
    set handle(value: string);
    get did(): string;
    set did(value: string);
    get email(): Nullable<string>;
    set email(value: Nullable<string>);
    get emailConfirmed(): Nullable<boolean>;
    set emailConfirmed(value: Nullable<boolean>);
    get emailAuthFactor(): Nullable<boolean>;
    set emailAuthFactor(value: Nullable<boolean>);
    get didDoc(): Nullable<DidDocUnion>;
    set didDoc(value: Nullable<DidDocUnion>);
    get active(): Nullable<boolean>;
    set active(value: Nullable<boolean>);
    copy(handle?: string, did?: string, email?: Nullable<string>, emailConfirmed?: Nullable<boolean>, emailAuthFactor?: Nullable<boolean>, didDoc?: Nullable<DidDocUnion>, active?: Nullable<boolean>): ServerGetSessionResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ServerGetSessionResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ServerGetSessionResponse;
    }
}
export declare class ServerRefreshSessionResponse {
    constructor(accessJwt?: string, refreshJwt?: string, handle?: string, did?: string, didDoc?: Nullable<DidDocUnion>, active?: Nullable<boolean>);
    get accessJwt(): string;
    set accessJwt(value: string);
    get refreshJwt(): string;
    set refreshJwt(value: string);
    get handle(): string;
    set handle(value: string);
    get did(): string;
    set did(value: string);
    get didDoc(): Nullable<DidDocUnion>;
    set didDoc(value: Nullable<DidDocUnion>);
    get active(): Nullable<boolean>;
    set active(value: Nullable<boolean>);
    copy(accessJwt?: string, refreshJwt?: string, handle?: string, did?: string, didDoc?: Nullable<DidDocUnion>, active?: Nullable<boolean>): ServerRefreshSessionResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ServerRefreshSessionResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ServerRefreshSessionResponse;
    }
}
export declare class AuthRequest {
    constructor(auth: AuthProvider);
    get auth(): AuthProvider;
}
export declare namespace AuthRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => AuthRequest;
    }
}
export declare class ErrorResponse {
    constructor(message: string | undefined, error: string, errorDescription?: string);
    get message(): string;
    set message(value: string);
    get error(): string;
    set error(value: string);
    get errorDescription(): string;
    set errorDescription(value: string);
    messageForDisplay(): string;
    copy(message?: string, error?: string, errorDescription?: string): ErrorResponse;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ErrorResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ErrorResponse;
    }
}
export declare interface MapRequest {
    toMappedJson(): string;
    toMap(): KtMap<string, any>;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.entity.share.MapRequest": unique symbol;
    };
}
export declare interface RKeyRequest {
    uri: Nullable<string>;
    rkey: Nullable<string>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.entity.share.RKeyRequest": unique symbol;
    };
}
export declare interface RecordRequest {
    createdAt: Nullable<string>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.api.entity.share.RecordRequest": unique symbol;
    };
}
export declare class Response<T> {
    constructor(data: T, json: string);
    get data(): T;
    get json(): string;
    copy(data?: T, json?: string): Response<T>;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace Response {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new <T>() => Response<T>;
    }
}
export declare class ResponseUnit {
    constructor(json: string);
    get json(): string;
    copy(json?: string): ResponseUnit;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ResponseUnit {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ResponseUnit;
    }
}
export declare interface AuthProvider {
    readonly did: string;
    readonly pdsDid: string;
    acceptLabelers: KtList<string>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.auth.AuthProvider": unique symbol;
    };
}
export declare class ActorDefsAdultContentPref extends ActorDefsPreferencesUnion.$metadata$.constructor {
    constructor(type?: string, enabled?: boolean);
    get type(): string;
    set type(value: string);
    get enabled(): boolean;
    set enabled(value: boolean);
    copy(type?: string, enabled?: boolean): ActorDefsAdultContentPref;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsAdultContentPref {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsAdultContentPref;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsContentLabelPref extends ActorDefsPreferencesUnion.$metadata$.constructor {
    constructor(type?: string, label?: string, visibility?: string);
    get type(): string;
    set type(value: string);
    get label(): string;
    set label(value: string);
    get visibility(): string;
    set visibility(value: string);
    copy(type?: string, label?: string, visibility?: string): ActorDefsContentLabelPref;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsContentLabelPref {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsContentLabelPref;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsFeedViewPref extends ActorDefsPreferencesUnion.$metadata$.constructor {
    constructor(type?: string, feed?: string, hideReplies?: Nullable<boolean>, hideRepliesByUnfollowed?: Nullable<boolean>, hideRepliesByLikeCount?: Nullable<number>, hideReposts?: Nullable<boolean>, hideQuotePosts?: Nullable<boolean>);
    get type(): string;
    set type(value: string);
    get feed(): string;
    set feed(value: string);
    get hideReplies(): Nullable<boolean>;
    set hideReplies(value: Nullable<boolean>);
    get hideRepliesByUnfollowed(): Nullable<boolean>;
    set hideRepliesByUnfollowed(value: Nullable<boolean>);
    get hideRepliesByLikeCount(): Nullable<number>;
    set hideRepliesByLikeCount(value: Nullable<number>);
    get hideReposts(): Nullable<boolean>;
    set hideReposts(value: Nullable<boolean>);
    get hideQuotePosts(): Nullable<boolean>;
    set hideQuotePosts(value: Nullable<boolean>);
    copy(type?: string, feed?: string, hideReplies?: Nullable<boolean>, hideRepliesByUnfollowed?: Nullable<boolean>, hideRepliesByLikeCount?: Nullable<number>, hideReposts?: Nullable<boolean>, hideQuotePosts?: Nullable<boolean>): ActorDefsFeedViewPref;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsFeedViewPref {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsFeedViewPref;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsKnownFollowers {
    constructor(count?: number, followers?: KtList<ActorDefsProfileViewBasic>);
    get count(): number;
    get followers(): KtList<ActorDefsProfileViewBasic>;
    set followers(value: KtList<ActorDefsProfileViewBasic>);
    copy(count?: number, followers?: KtList<ActorDefsProfileViewBasic>): ActorDefsKnownFollowers;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsKnownFollowers {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsKnownFollowers;
    }
}
export declare class ActorDefsLabelerPrefItem {
    constructor(did: string);
    get did(): string;
    copy(did?: string): ActorDefsLabelerPrefItem;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsLabelerPrefItem {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsLabelerPrefItem;
    }
}
export declare class ActorDefsLabelersPref extends ActorDefsPreferencesUnion.$metadata$.constructor {
    constructor(type?: string, labelers?: Nullable<KtList<ActorDefsLabelerPrefItem>>);
    get type(): string;
    set type(value: string);
    get labelers(): Nullable<KtList<ActorDefsLabelerPrefItem>>;
    set labelers(value: Nullable<KtList<ActorDefsLabelerPrefItem>>);
    copy(type?: string, labelers?: Nullable<KtList<ActorDefsLabelerPrefItem>>): ActorDefsLabelersPref;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsLabelersPref {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsLabelersPref;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsPersonalDetailsPref extends ActorDefsPreferencesUnion.$metadata$.constructor {
    constructor(type?: string, birthDate?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get birthDate(): Nullable<string>;
    set birthDate(value: Nullable<string>);
    copy(type?: string, birthDate?: Nullable<string>): ActorDefsPersonalDetailsPref;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsPersonalDetailsPref {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsPersonalDetailsPref;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsPreferences {
    constructor(items?: Nullable<KtList<ActorDefsPreferencesUnion>>);
    get items(): Nullable<KtList<ActorDefsPreferencesUnion>>;
    copy(items?: Nullable<KtList<ActorDefsPreferencesUnion>>): ActorDefsPreferences;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsPreferences {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsPreferences;
    }
}
export declare abstract class ActorDefsPreferencesUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asPersonalDetailsPref(): Nullable<ActorDefsPersonalDetailsPref>;
    get asAdultContentPref(): Nullable<ActorDefsAdultContentPref>;
    get asContentLabelPref(): Nullable<ActorDefsContentLabelPref>;
    get asSavedFeedsPref(): Nullable<ActorDefsSavedFeedsPref>;
    get asSavedFeedsPrefV2(): Nullable<ActorDefsSavedFeedsPrefV2>;
    get asFeedViewPref(): Nullable<ActorDefsFeedViewPref>;
    get asThreadViewPref(): Nullable<ActorDefsThreadViewPref>;
    get asLabelersPref(): Nullable<ActorDefsLabelersPref>;
}
export declare namespace ActorDefsPreferencesUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsPreferencesUnion;
    }
}
export declare class ActorDefsProfileAssociated {
    constructor(lists?: Nullable<number>, feedgens?: Nullable<number>, labeler?: Nullable<boolean>, chat?: Nullable<ActorDefsProfileAssociatedChat>);
    get lists(): Nullable<number>;
    set lists(value: Nullable<number>);
    get feedgens(): Nullable<number>;
    set feedgens(value: Nullable<number>);
    get labeler(): Nullable<boolean>;
    set labeler(value: Nullable<boolean>);
    get chat(): Nullable<ActorDefsProfileAssociatedChat>;
    set chat(value: Nullable<ActorDefsProfileAssociatedChat>);
    copy(lists?: Nullable<number>, feedgens?: Nullable<number>, labeler?: Nullable<boolean>, chat?: Nullable<ActorDefsProfileAssociatedChat>): ActorDefsProfileAssociated;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsProfileAssociated {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsProfileAssociated;
    }
}
export declare class ActorDefsProfileAssociatedChat {
    constructor(allowIncoming?: string);
    get allowIncoming(): string;
    set allowIncoming(value: string);
    copy(allowIncoming?: string): ActorDefsProfileAssociatedChat;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsProfileAssociatedChat {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsProfileAssociatedChat;
    }
}
export declare class ActorDefsProfileView {
    constructor(did?: string, handle?: string, displayName?: Nullable<string>, description?: Nullable<string>, avatar?: Nullable<string>, associated?: Nullable<ActorDefsProfileAssociated>, indexedAt?: Nullable<string>, createdAt?: Nullable<string>, viewer?: Nullable<ActorDefsViewerState>, labels?: Nullable<KtList<LabelDefsLabel>>, verification?: Nullable<ActorDefsVerificationState>);
    get did(): string;
    set did(value: string);
    get handle(): string;
    set handle(value: string);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get description(): Nullable<string>;
    set description(value: Nullable<string>);
    get avatar(): Nullable<string>;
    set avatar(value: Nullable<string>);
    get associated(): Nullable<ActorDefsProfileAssociated>;
    set associated(value: Nullable<ActorDefsProfileAssociated>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get viewer(): Nullable<ActorDefsViewerState>;
    set viewer(value: Nullable<ActorDefsViewerState>);
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    set labels(value: Nullable<KtList<LabelDefsLabel>>);
    get verification(): Nullable<ActorDefsVerificationState>;
    set verification(value: Nullable<ActorDefsVerificationState>);
    copy(did?: string, handle?: string, displayName?: Nullable<string>, description?: Nullable<string>, avatar?: Nullable<string>, associated?: Nullable<ActorDefsProfileAssociated>, indexedAt?: Nullable<string>, createdAt?: Nullable<string>, viewer?: Nullable<ActorDefsViewerState>, labels?: Nullable<KtList<LabelDefsLabel>>, verification?: Nullable<ActorDefsVerificationState>): ActorDefsProfileView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsProfileView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsProfileView;
    }
}
export declare class ActorDefsProfileViewBasic {
    constructor(did?: string, handle?: string, displayName?: Nullable<string>, avatar?: Nullable<string>, viewer?: Nullable<ActorDefsViewerState>, associated?: Nullable<ActorDefsProfileAssociated>, labels?: Nullable<KtList<LabelDefsLabel>>, createdAt?: Nullable<string>, verification?: Nullable<ActorDefsVerificationState>);
    get did(): string;
    set did(value: string);
    get handle(): string;
    set handle(value: string);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get avatar(): Nullable<string>;
    set avatar(value: Nullable<string>);
    get viewer(): Nullable<ActorDefsViewerState>;
    set viewer(value: Nullable<ActorDefsViewerState>);
    get associated(): Nullable<ActorDefsProfileAssociated>;
    set associated(value: Nullable<ActorDefsProfileAssociated>);
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    set labels(value: Nullable<KtList<LabelDefsLabel>>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get verification(): Nullable<ActorDefsVerificationState>;
    set verification(value: Nullable<ActorDefsVerificationState>);
    copy(did?: string, handle?: string, displayName?: Nullable<string>, avatar?: Nullable<string>, viewer?: Nullable<ActorDefsViewerState>, associated?: Nullable<ActorDefsProfileAssociated>, labels?: Nullable<KtList<LabelDefsLabel>>, createdAt?: Nullable<string>, verification?: Nullable<ActorDefsVerificationState>): ActorDefsProfileViewBasic;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsProfileViewBasic {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsProfileViewBasic;
    }
}
export declare class ActorDefsProfileViewDetailed {
    constructor();
    get did(): string;
    set did(value: string);
    get handle(): string;
    set handle(value: string);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get description(): Nullable<string>;
    set description(value: Nullable<string>);
    get avatar(): Nullable<string>;
    set avatar(value: Nullable<string>);
    get banner(): Nullable<string>;
    set banner(value: Nullable<string>);
    get followersCount(): Nullable<number>;
    set followersCount(value: Nullable<number>);
    get followsCount(): Nullable<number>;
    set followsCount(value: Nullable<number>);
    get postsCount(): Nullable<number>;
    set postsCount(value: Nullable<number>);
    get associated(): Nullable<ActorDefsProfileAssociated>;
    set associated(value: Nullable<ActorDefsProfileAssociated>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get viewer(): Nullable<ActorDefsViewerState>;
    set viewer(value: Nullable<ActorDefsViewerState>);
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    set labels(value: Nullable<KtList<LabelDefsLabel>>);
    get pinnedPost(): Nullable<RepoStrongRef>;
    set pinnedPost(value: Nullable<RepoStrongRef>);
    get verification(): Nullable<ActorDefsVerificationState>;
    set verification(value: Nullable<ActorDefsVerificationState>);
}
export declare namespace ActorDefsProfileViewDetailed {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsProfileViewDetailed;
    }
}
export declare class ActorDefsSavedFeed {
    constructor(id?: string, type?: string, value?: string, pinned?: boolean);
    get id(): string;
    get type(): string;
    get value(): string;
    get pinned(): boolean;
    copy(id?: string, type?: string, value?: string, pinned?: boolean): ActorDefsSavedFeed;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsSavedFeed {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsSavedFeed;
    }
}
export declare class ActorDefsSavedFeedsPref extends ActorDefsPreferencesUnion.$metadata$.constructor {
    constructor(type?: string, pinned?: KtList<string>, saved?: KtList<string>);
    get type(): string;
    set type(value: string);
    get pinned(): KtList<string>;
    set pinned(value: KtList<string>);
    get saved(): KtList<string>;
    set saved(value: KtList<string>);
    copy(type?: string, pinned?: KtList<string>, saved?: KtList<string>): ActorDefsSavedFeedsPref;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsSavedFeedsPref {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsSavedFeedsPref;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsSavedFeedsPrefV2 extends ActorDefsPreferencesUnion.$metadata$.constructor {
    constructor(type?: string, items?: KtList<ActorDefsSavedFeed>);
    get type(): string;
    set type(value: string);
    get items(): KtList<ActorDefsSavedFeed>;
    set items(value: KtList<ActorDefsSavedFeed>);
    copy(type?: string, items?: KtList<ActorDefsSavedFeed>): ActorDefsSavedFeedsPrefV2;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsSavedFeedsPrefV2 {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsSavedFeedsPrefV2;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsThreadViewPref extends ActorDefsPreferencesUnion.$metadata$.constructor {
    constructor(type?: string, sort?: Nullable<string>, prioritizeFollowedUsers?: Nullable<boolean>);
    get type(): string;
    set type(value: string);
    get sort(): Nullable<string>;
    set sort(value: Nullable<string>);
    get prioritizeFollowedUsers(): Nullable<boolean>;
    set prioritizeFollowedUsers(value: Nullable<boolean>);
    copy(type?: string, sort?: Nullable<string>, prioritizeFollowedUsers?: Nullable<boolean>): ActorDefsThreadViewPref;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsThreadViewPref {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsThreadViewPref;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsVerificationState {
    constructor(verifications: KtList<ActorDefsVerificationView>, verifiedStatus: string, trustedVerifierStatus: string);
    get verifications(): KtList<ActorDefsVerificationView>;
    get verifiedStatus(): string;
    get trustedVerifierStatus(): string;
    copy(verifications?: KtList<ActorDefsVerificationView>, verifiedStatus?: string, trustedVerifierStatus?: string): ActorDefsVerificationState;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsVerificationState {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsVerificationState;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get STATUS_VALID(): string;
                get STATUS_INVALID(): string;
                get STATUS_NONE(): string;
                private constructor();
            }
        }
    }
}
export declare class ActorDefsVerificationView {
    constructor(issuer: string, uri: string, isValid: boolean, createdAt: string);
    get issuer(): string;
    get uri(): string;
    get isValid(): boolean;
    get createdAt(): string;
    copy(issuer?: string, uri?: string, isValid?: boolean, createdAt?: string): ActorDefsVerificationView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsVerificationView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsVerificationView;
    }
}
export declare class ActorDefsViewerState {
    constructor(muted?: Nullable<boolean>, blockedBy?: Nullable<boolean>, blocking?: Nullable<string>, following?: Nullable<string>, followedBy?: Nullable<string>, knownFollowers?: Nullable<ActorDefsKnownFollowers>);
    get muted(): Nullable<boolean>;
    set muted(value: Nullable<boolean>);
    get blockedBy(): Nullable<boolean>;
    set blockedBy(value: Nullable<boolean>);
    get blocking(): Nullable<string>;
    set blocking(value: Nullable<string>);
    get following(): Nullable<string>;
    set following(value: Nullable<string>);
    get followedBy(): Nullable<string>;
    set followedBy(value: Nullable<string>);
    get knownFollowers(): Nullable<ActorDefsKnownFollowers>;
    copy(muted?: Nullable<boolean>, blockedBy?: Nullable<boolean>, blocking?: Nullable<string>, following?: Nullable<string>, followedBy?: Nullable<string>, knownFollowers?: Nullable<ActorDefsKnownFollowers>): ActorDefsViewerState;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorDefsViewerState {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorDefsViewerState;
    }
}
export declare class ActorProfile extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, displayName?: Nullable<string>, description?: Nullable<string>, avatar?: Nullable<Blob>, banner?: Nullable<Blob>, pinnedPost?: Nullable<RepoStrongRef>);
    get type(): string;
    set type(value: string);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get description(): Nullable<string>;
    set description(value: Nullable<string>);
    get avatar(): Nullable<Blob>;
    set avatar(value: Nullable<Blob>);
    get banner(): Nullable<Blob>;
    set banner(value: Nullable<Blob>);
    get pinnedPost(): Nullable<RepoStrongRef>;
    set pinnedPost(value: Nullable<RepoStrongRef>);
    copy(type?: string, displayName?: Nullable<string>, description?: Nullable<string>, avatar?: Nullable<Blob>, banner?: Nullable<Blob>, pinnedPost?: Nullable<RepoStrongRef>): ActorProfile;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ActorProfile {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ActorProfile;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedDefsAspectRatio {
    constructor(width?: number, height?: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    copy(width?: number, height?: number): EmbedDefsAspectRatio;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedDefsAspectRatio {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedDefsAspectRatio;
    }
}
export declare class EmbedExternal extends EmbedUnion.$metadata$.constructor {
    constructor(type?: string, external?: Nullable<EmbedExternalExternal>);
    get type(): string;
    set type(value: string);
    get external(): Nullable<EmbedExternalExternal>;
    set external(value: Nullable<EmbedExternalExternal>);
    copy(type?: string, external?: Nullable<EmbedExternalExternal>): EmbedExternal;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedExternal {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedExternal;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedExternalExternal {
    constructor(uri?: string, title?: string, description?: string, thumb?: Nullable<Blob>);
    get uri(): string;
    set uri(value: string);
    get title(): string;
    set title(value: string);
    get description(): string;
    set description(value: string);
    get thumb(): Nullable<Blob>;
    set thumb(value: Nullable<Blob>);
    copy(uri?: string, title?: string, description?: string, thumb?: Nullable<Blob>): EmbedExternalExternal;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedExternalExternal {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedExternalExternal;
    }
}
export declare class EmbedExternalView extends EmbedViewUnion.$metadata$.constructor {
    constructor(type?: string, external?: Nullable<EmbedExternalViewExternal>);
    get type(): string;
    set type(value: string);
    get external(): Nullable<EmbedExternalViewExternal>;
    set external(value: Nullable<EmbedExternalViewExternal>);
    copy(type?: string, external?: Nullable<EmbedExternalViewExternal>): EmbedExternalView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedExternalView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedExternalView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedExternalViewExternal {
    constructor(uri?: string, title?: string, description?: string, thumb?: Nullable<string>);
    get uri(): string;
    set uri(value: string);
    get title(): string;
    set title(value: string);
    get description(): string;
    set description(value: string);
    get thumb(): Nullable<string>;
    set thumb(value: Nullable<string>);
    copy(uri?: string, title?: string, description?: string, thumb?: Nullable<string>): EmbedExternalViewExternal;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedExternalViewExternal {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedExternalViewExternal;
    }
}
export declare class EmbedImages extends EmbedUnion.$metadata$.constructor {
    constructor(type?: string, images?: Nullable<KtList<EmbedImagesImage>>);
    get type(): string;
    set type(value: string);
    get images(): Nullable<KtList<EmbedImagesImage>>;
    set images(value: Nullable<KtList<EmbedImagesImage>>);
    copy(type?: string, images?: Nullable<KtList<EmbedImagesImage>>): EmbedImages;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedImages {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedImages;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedImagesImage {
    constructor(image?: Nullable<Blob>, alt?: Nullable<string>, aspectRatio?: Nullable<EmbedDefsAspectRatio>);
    get image(): Nullable<Blob>;
    set image(value: Nullable<Blob>);
    get alt(): Nullable<string>;
    set alt(value: Nullable<string>);
    get aspectRatio(): Nullable<EmbedDefsAspectRatio>;
    set aspectRatio(value: Nullable<EmbedDefsAspectRatio>);
    copy(image?: Nullable<Blob>, alt?: Nullable<string>, aspectRatio?: Nullable<EmbedDefsAspectRatio>): EmbedImagesImage;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedImagesImage {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedImagesImage;
    }
}
export declare class EmbedImagesView extends EmbedViewUnion.$metadata$.constructor {
    constructor(type?: string, images?: Nullable<KtList<EmbedImagesViewImage>>);
    get type(): string;
    set type(value: string);
    get images(): Nullable<KtList<EmbedImagesViewImage>>;
    set images(value: Nullable<KtList<EmbedImagesViewImage>>);
    copy(type?: string, images?: Nullable<KtList<EmbedImagesViewImage>>): EmbedImagesView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedImagesView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedImagesView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedImagesViewImage {
    constructor(thumb?: Nullable<string>, fullsize?: Nullable<string>, alt?: Nullable<string>, aspectRatio?: Nullable<EmbedDefsAspectRatio>);
    get thumb(): Nullable<string>;
    get fullsize(): Nullable<string>;
    get alt(): Nullable<string>;
    get aspectRatio(): Nullable<EmbedDefsAspectRatio>;
    copy(thumb?: Nullable<string>, fullsize?: Nullable<string>, alt?: Nullable<string>, aspectRatio?: Nullable<EmbedDefsAspectRatio>): EmbedImagesViewImage;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedImagesViewImage {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedImagesViewImage;
    }
}
export declare class EmbedRecord extends EmbedUnion.$metadata$.constructor {
    constructor(type?: string, record?: Nullable<RepoStrongRef>);
    get type(): string;
    set type(value: string);
    get record(): Nullable<RepoStrongRef>;
    set record(value: Nullable<RepoStrongRef>);
    copy(type?: string, record?: Nullable<RepoStrongRef>): EmbedRecord;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedRecord {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecord;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedRecordView extends EmbedViewUnion.$metadata$.constructor {
    constructor(type?: string, record?: Nullable<EmbedRecordViewUnion>);
    get type(): string;
    set type(value: string);
    get record(): Nullable<EmbedRecordViewUnion>;
    set record(value: Nullable<EmbedRecordViewUnion>);
    copy(type?: string, record?: Nullable<EmbedRecordViewUnion>): EmbedRecordView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedRecordView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecordView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedRecordViewBlocked extends EmbedRecordViewUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    copy(type?: string, uri?: Nullable<string>): EmbedRecordViewBlocked;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedRecordViewBlocked {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecordViewBlocked;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedRecordViewDetached extends EmbedRecordViewUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>, detached?: boolean);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get detached(): boolean;
    set detached(value: boolean);
    copy(type?: string, uri?: Nullable<string>, detached?: boolean): EmbedRecordViewDetached;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedRecordViewDetached {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecordViewDetached;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedRecordViewNotFound extends EmbedRecordViewUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    copy(type?: string, uri?: Nullable<string>): EmbedRecordViewNotFound;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedRecordViewNotFound {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecordViewNotFound;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedRecordViewRecord extends EmbedRecordViewUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, author?: Nullable<ActorDefsProfileViewBasic>, value?: Nullable<RecordUnion>, labels?: Nullable<KtList<LabelDefsLabel>>, embeds?: Nullable<KtList<EmbedViewUnion>>, indexedAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get author(): Nullable<ActorDefsProfileViewBasic>;
    set author(value: Nullable<ActorDefsProfileViewBasic>);
    get value(): Nullable<RecordUnion>;
    set value(value: Nullable<RecordUnion>);
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    set labels(value: Nullable<KtList<LabelDefsLabel>>);
    get embeds(): Nullable<KtList<EmbedViewUnion>>;
    set embeds(value: Nullable<KtList<EmbedViewUnion>>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    copy(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, author?: Nullable<ActorDefsProfileViewBasic>, value?: Nullable<RecordUnion>, labels?: Nullable<KtList<LabelDefsLabel>>, embeds?: Nullable<KtList<EmbedViewUnion>>, indexedAt?: Nullable<string>): EmbedRecordViewRecord;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedRecordViewRecord {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecordViewRecord;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare abstract class EmbedRecordViewUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asRecord(): Nullable<EmbedRecordViewRecord>;
    get asNotFound(): Nullable<EmbedRecordViewNotFound>;
    get asBlocked(): Nullable<EmbedRecordViewBlocked>;
    get asDetached(): Nullable<EmbedRecordViewDetached>;
    get asGeneratorView(): Nullable<FeedDefsGeneratorView>;
    get asListView(): Nullable<GraphDefsListView>;
    get asStarterPackView(): Nullable<GraphDefsStarterPackViewBasic>;
}
export declare namespace EmbedRecordViewUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecordViewUnion;
    }
}
export declare class EmbedRecordWithMedia extends EmbedUnion.$metadata$.constructor {
    constructor(type?: string, record?: Nullable<EmbedRecord>, media?: Nullable<EmbedUnion>);
    get type(): string;
    set type(value: string);
    get record(): Nullable<EmbedRecord>;
    set record(value: Nullable<EmbedRecord>);
    get media(): Nullable<EmbedUnion>;
    set media(value: Nullable<EmbedUnion>);
    copy(type?: string, record?: Nullable<EmbedRecord>, media?: Nullable<EmbedUnion>): EmbedRecordWithMedia;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedRecordWithMedia {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecordWithMedia;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedRecordWithMediaView extends EmbedViewUnion.$metadata$.constructor {
    constructor(type?: string, record?: Nullable<EmbedRecordView>, media?: Nullable<EmbedViewUnion>);
    get type(): string;
    set type(value: string);
    get record(): Nullable<EmbedRecordView>;
    set record(value: Nullable<EmbedRecordView>);
    get media(): Nullable<EmbedViewUnion>;
    set media(value: Nullable<EmbedViewUnion>);
    copy(type?: string, record?: Nullable<EmbedRecordView>, media?: Nullable<EmbedViewUnion>): EmbedRecordWithMediaView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedRecordWithMediaView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedRecordWithMediaView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare abstract class EmbedUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asExternal(): Nullable<EmbedExternal>;
    get asImages(): Nullable<EmbedImages>;
    get asVideo(): Nullable<EmbedVideo>;
    get asRecord(): Nullable<EmbedRecord>;
    get asRecordWithMedia(): Nullable<EmbedRecordWithMedia>;
}
export declare namespace EmbedUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedUnion;
    }
}
export declare class EmbedVideo extends EmbedUnion.$metadata$.constructor {
    constructor(type?: string, video?: Nullable<Blob>, alt?: Nullable<string>, aspectRatio?: Nullable<EmbedDefsAspectRatio>);
    get type(): string;
    set type(value: string);
    get video(): Nullable<Blob>;
    set video(value: Nullable<Blob>);
    get alt(): Nullable<string>;
    set alt(value: Nullable<string>);
    get aspectRatio(): Nullable<EmbedDefsAspectRatio>;
    set aspectRatio(value: Nullable<EmbedDefsAspectRatio>);
    copy(type?: string, video?: Nullable<Blob>, alt?: Nullable<string>, aspectRatio?: Nullable<EmbedDefsAspectRatio>): EmbedVideo;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedVideo {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedVideo;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class EmbedVideoView extends EmbedViewUnion.$metadata$.constructor {
    constructor(type?: string, cid?: string, playlist?: string, thumbnail?: Nullable<string>, alt?: Nullable<string>, aspectRatio?: Nullable<EmbedDefsAspectRatio>);
    get type(): string;
    set type(value: string);
    get cid(): string;
    set cid(value: string);
    get playlist(): string;
    set playlist(value: string);
    get thumbnail(): Nullable<string>;
    set thumbnail(value: Nullable<string>);
    get alt(): Nullable<string>;
    set alt(value: Nullable<string>);
    get aspectRatio(): Nullable<EmbedDefsAspectRatio>;
    set aspectRatio(value: Nullable<EmbedDefsAspectRatio>);
    copy(type?: string, cid?: string, playlist?: string, thumbnail?: Nullable<string>, alt?: Nullable<string>, aspectRatio?: Nullable<EmbedDefsAspectRatio>): EmbedVideoView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace EmbedVideoView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedVideoView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare abstract class EmbedViewUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asExternal(): Nullable<EmbedExternalView>;
    get asImages(): Nullable<EmbedImagesView>;
    get asVideo(): Nullable<EmbedVideoView>;
    get asRecord(): Nullable<EmbedRecordView>;
    get asRecordWithMedia(): Nullable<EmbedRecordWithMediaView>;
}
export declare namespace EmbedViewUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EmbedViewUnion;
    }
}
export declare interface FeedDefsBookmarkItemUnion {
    readonly type: string;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.model.app.bsky.feed.FeedDefsBookmarkItemUnion": unique symbol;
    };
}
export declare class FeedDefsBookmarkView {
    constructor(subject: RepoStrongRef, createdAt: Nullable<string> | undefined, item: FeedDefsBookmarkItemUnion);
    get subject(): RepoStrongRef;
    get createdAt(): Nullable<string>;
    get item(): FeedDefsBookmarkItemUnion;
    copy(subject?: RepoStrongRef, createdAt?: Nullable<string>, item?: FeedDefsBookmarkItemUnion): FeedDefsBookmarkView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsBookmarkView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsBookmarkView;
    }
}
export declare class FeedDefsFeedViewPost {
    constructor(post?: FeedDefsPostView, reply?: Nullable<FeedDefsReplyRef>, reason?: Nullable<FeedDefsReasonUnion>);
    get post(): FeedDefsPostView;
    set post(value: FeedDefsPostView);
    get reply(): Nullable<FeedDefsReplyRef>;
    set reply(value: Nullable<FeedDefsReplyRef>);
    get reason(): Nullable<FeedDefsReasonUnion>;
    set reason(value: Nullable<FeedDefsReasonUnion>);
    copy(post?: FeedDefsPostView, reply?: Nullable<FeedDefsReplyRef>, reason?: Nullable<FeedDefsReasonUnion>): FeedDefsFeedViewPost;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsFeedViewPost {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsFeedViewPost;
    }
}
export declare class FeedDefsGeneratorView extends EmbedRecordViewUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, did?: Nullable<string>, creator?: Nullable<ActorDefsProfileView>, displayName?: Nullable<string>, description?: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, avatar?: Nullable<string>, likeCount?: Nullable<number>, viewer?: Nullable<FeedDefsGeneratorViewerState>, indexedAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get did(): Nullable<string>;
    set did(value: Nullable<string>);
    get creator(): Nullable<ActorDefsProfileView>;
    set creator(value: Nullable<ActorDefsProfileView>);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get description(): Nullable<string>;
    set description(value: Nullable<string>);
    get descriptionFacets(): Nullable<KtList<RichtextFacet>>;
    set descriptionFacets(value: Nullable<KtList<RichtextFacet>>);
    get avatar(): Nullable<string>;
    set avatar(value: Nullable<string>);
    get likeCount(): Nullable<number>;
    set likeCount(value: Nullable<number>);
    get viewer(): Nullable<FeedDefsGeneratorViewerState>;
    set viewer(value: Nullable<FeedDefsGeneratorViewerState>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    copy(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, did?: Nullable<string>, creator?: Nullable<ActorDefsProfileView>, displayName?: Nullable<string>, description?: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, avatar?: Nullable<string>, likeCount?: Nullable<number>, viewer?: Nullable<FeedDefsGeneratorViewerState>, indexedAt?: Nullable<string>): FeedDefsGeneratorView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsGeneratorView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsGeneratorView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedDefsGeneratorViewerState {
    constructor(like?: Nullable<string>);
    get like(): Nullable<string>;
    set like(value: Nullable<string>);
    copy(like?: Nullable<string>): FeedDefsGeneratorViewerState;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsGeneratorViewerState {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsGeneratorViewerState;
    }
}
export declare class FeedDefsNotFoundPost extends FeedDefsThreadUnion.$metadata$.constructor implements FeedDefsBookmarkItemUnion {
    constructor(type?: string, uri?: Nullable<string>, notFound?: boolean);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get notFound(): boolean;
    set notFound(value: boolean);
    copy(type?: string, uri?: Nullable<string>, notFound?: boolean): FeedDefsNotFoundPost;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    readonly __doNotUseOrImplementIt: FeedDefsBookmarkItemUnion["__doNotUseOrImplementIt"];
}
export declare namespace FeedDefsNotFoundPost {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsNotFoundPost;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedDefsPostView implements FeedDefsBookmarkItemUnion {
    constructor(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, author?: Nullable<ActorDefsProfileViewBasic>, record?: Nullable<RecordUnion>, embed?: Nullable<EmbedViewUnion>, replyCount?: Nullable<number>, repostCount?: Nullable<number>, likeCount?: Nullable<number>, bookmarkCount?: Nullable<number>, quoteCount?: Nullable<number>, indexedAt?: Nullable<string>, viewer?: Nullable<FeedDefsViewerState>, labels?: Nullable<KtList<LabelDefsLabel>>, threadgate?: Nullable<FeedDefsThreadgateView>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get author(): Nullable<ActorDefsProfileViewBasic>;
    set author(value: Nullable<ActorDefsProfileViewBasic>);
    get record(): Nullable<RecordUnion>;
    set record(value: Nullable<RecordUnion>);
    get embed(): Nullable<EmbedViewUnion>;
    set embed(value: Nullable<EmbedViewUnion>);
    get replyCount(): Nullable<number>;
    set replyCount(value: Nullable<number>);
    get repostCount(): Nullable<number>;
    set repostCount(value: Nullable<number>);
    get likeCount(): Nullable<number>;
    set likeCount(value: Nullable<number>);
    get bookmarkCount(): Nullable<number>;
    set bookmarkCount(value: Nullable<number>);
    get quoteCount(): Nullable<number>;
    set quoteCount(value: Nullable<number>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    get viewer(): Nullable<FeedDefsViewerState>;
    set viewer(value: Nullable<FeedDefsViewerState>);
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    set labels(value: Nullable<KtList<LabelDefsLabel>>);
    get threadgate(): Nullable<FeedDefsThreadgateView>;
    set threadgate(value: Nullable<FeedDefsThreadgateView>);
    copy(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, author?: Nullable<ActorDefsProfileViewBasic>, record?: Nullable<RecordUnion>, embed?: Nullable<EmbedViewUnion>, replyCount?: Nullable<number>, repostCount?: Nullable<number>, likeCount?: Nullable<number>, bookmarkCount?: Nullable<number>, quoteCount?: Nullable<number>, indexedAt?: Nullable<string>, viewer?: Nullable<FeedDefsViewerState>, labels?: Nullable<KtList<LabelDefsLabel>>, threadgate?: Nullable<FeedDefsThreadgateView>): FeedDefsPostView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    readonly __doNotUseOrImplementIt: FeedDefsBookmarkItemUnion["__doNotUseOrImplementIt"];
}
export declare namespace FeedDefsPostView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsPostView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedDefsReasonPin extends FeedDefsReasonUnion.$metadata$.constructor {
    constructor(type?: string);
    get type(): string;
    set type(value: string);
    copy(type?: string): FeedDefsReasonPin;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsReasonPin {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsReasonPin;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedDefsReasonRepost extends FeedDefsReasonUnion.$metadata$.constructor {
    constructor(type?: string, by?: Nullable<ActorDefsProfileViewBasic>, uri?: Nullable<string>, cid?: Nullable<string>, indexedAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get by(): Nullable<ActorDefsProfileViewBasic>;
    set by(value: Nullable<ActorDefsProfileViewBasic>);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    copy(type?: string, by?: Nullable<ActorDefsProfileViewBasic>, uri?: Nullable<string>, cid?: Nullable<string>, indexedAt?: Nullable<string>): FeedDefsReasonRepost;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsReasonRepost {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsReasonRepost;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare abstract class FeedDefsReasonUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asReasonRepost(): Nullable<FeedDefsReasonRepost>;
    get asReasonPin(): Nullable<FeedDefsReasonPin>;
}
export declare namespace FeedDefsReasonUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsReasonUnion;
    }
}
export declare class FeedDefsReplyRef {
    constructor(root?: Nullable<FeedDefsPostView>, parent?: Nullable<FeedDefsPostView>);
    get root(): Nullable<FeedDefsPostView>;
    set root(value: Nullable<FeedDefsPostView>);
    get parent(): Nullable<FeedDefsPostView>;
    set parent(value: Nullable<FeedDefsPostView>);
    copy(root?: Nullable<FeedDefsPostView>, parent?: Nullable<FeedDefsPostView>): FeedDefsReplyRef;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsReplyRef {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsReplyRef;
    }
}
export declare abstract class FeedDefsThreadUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asViewPost(): Nullable<FeedDefsThreadViewPost>;
    get asNotFoundPost(): Nullable<FeedDefsNotFoundPost>;
}
export declare namespace FeedDefsThreadUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsThreadUnion;
    }
}
export declare class FeedDefsThreadViewPost extends FeedDefsThreadUnion.$metadata$.constructor {
    constructor(type?: string, post?: Nullable<FeedDefsPostView>, parent?: Nullable<FeedDefsThreadUnion>, replies?: Nullable<KtList<FeedDefsThreadUnion>>);
    get type(): string;
    set type(value: string);
    get post(): Nullable<FeedDefsPostView>;
    set post(value: Nullable<FeedDefsPostView>);
    get parent(): Nullable<FeedDefsThreadUnion>;
    set parent(value: Nullable<FeedDefsThreadUnion>);
    get replies(): Nullable<KtList<FeedDefsThreadUnion>>;
    set replies(value: Nullable<KtList<FeedDefsThreadUnion>>);
    copy(type?: string, post?: Nullable<FeedDefsPostView>, parent?: Nullable<FeedDefsThreadUnion>, replies?: Nullable<KtList<FeedDefsThreadUnion>>): FeedDefsThreadViewPost;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsThreadViewPost {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsThreadViewPost;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedDefsThreadgateView {
    constructor(uri?: Nullable<string>, cid?: Nullable<string>, record?: Nullable<FeedThreadgate>, lists?: Nullable<KtList<GraphDefsListViewBasic>>);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get record(): Nullable<FeedThreadgate>;
    set record(value: Nullable<FeedThreadgate>);
    get lists(): Nullable<KtList<GraphDefsListViewBasic>>;
    set lists(value: Nullable<KtList<GraphDefsListViewBasic>>);
    copy(uri?: Nullable<string>, cid?: Nullable<string>, record?: Nullable<FeedThreadgate>, lists?: Nullable<KtList<GraphDefsListViewBasic>>): FeedDefsThreadgateView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsThreadgateView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsThreadgateView;
    }
}
export declare class FeedDefsViewerState {
    constructor(repost?: Nullable<string>, like?: Nullable<string>, bookmarked?: Nullable<boolean>, replyDisabled?: Nullable<boolean>, embeddingDisabled?: Nullable<boolean>, pinned?: Nullable<boolean>);
    get repost(): Nullable<string>;
    set repost(value: Nullable<string>);
    get like(): Nullable<string>;
    set like(value: Nullable<string>);
    get bookmarked(): Nullable<boolean>;
    set bookmarked(value: Nullable<boolean>);
    get replyDisabled(): Nullable<boolean>;
    set replyDisabled(value: Nullable<boolean>);
    get embeddingDisabled(): Nullable<boolean>;
    set embeddingDisabled(value: Nullable<boolean>);
    get pinned(): Nullable<boolean>;
    set pinned(value: Nullable<boolean>);
    copy(repost?: Nullable<string>, like?: Nullable<string>, bookmarked?: Nullable<boolean>, replyDisabled?: Nullable<boolean>, embeddingDisabled?: Nullable<boolean>, pinned?: Nullable<boolean>): FeedDefsViewerState;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedDefsViewerState {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedDefsViewerState;
    }
}
export declare class FeedGetLikesLike {
    constructor(indexedAt?: string, createdAt?: string, actor?: ActorDefsProfileView);
    get indexedAt(): string;
    set indexedAt(value: string);
    get createdAt(): string;
    set createdAt(value: string);
    get actor(): ActorDefsProfileView;
    set actor(value: ActorDefsProfileView);
    copy(indexedAt?: string, createdAt?: string, actor?: ActorDefsProfileView): FeedGetLikesLike;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedGetLikesLike {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedGetLikesLike;
    }
}
export declare class FeedLike extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, subject?: Nullable<RepoStrongRef>, createdAt?: Nullable<string>, via?: Nullable<RepoStrongRef>);
    get type(): string;
    set type(value: string);
    get subject(): Nullable<RepoStrongRef>;
    set subject(value: Nullable<RepoStrongRef>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get via(): Nullable<RepoStrongRef>;
    copy(type?: string, subject?: Nullable<RepoStrongRef>, createdAt?: Nullable<string>, via?: Nullable<RepoStrongRef>): FeedLike;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedLike {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedLike;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedPost extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, text?: Nullable<string>, langs?: Nullable<KtList<string>>, labels?: Nullable<LabelDefsSelfLabels>, facets?: Nullable<KtList<RichtextFacet>>, reply?: Nullable<FeedPostReplyRef>, embed?: Nullable<EmbedUnion>, createdAt?: Nullable<string>, via?: Nullable<string>, skyblurPostUri?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get text(): Nullable<string>;
    set text(value: Nullable<string>);
    get langs(): Nullable<KtList<string>>;
    set langs(value: Nullable<KtList<string>>);
    get labels(): Nullable<LabelDefsSelfLabels>;
    set labels(value: Nullable<LabelDefsSelfLabels>);
    get facets(): Nullable<KtList<RichtextFacet>>;
    set facets(value: Nullable<KtList<RichtextFacet>>);
    get reply(): Nullable<FeedPostReplyRef>;
    set reply(value: Nullable<FeedPostReplyRef>);
    get embed(): Nullable<EmbedUnion>;
    set embed(value: Nullable<EmbedUnion>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get via(): Nullable<string>;
    set via(value: Nullable<string>);
    get skyblurPostUri(): Nullable<string>;
    set skyblurPostUri(value: Nullable<string>);
    copy(type?: string, text?: Nullable<string>, langs?: Nullable<KtList<string>>, labels?: Nullable<LabelDefsSelfLabels>, facets?: Nullable<KtList<RichtextFacet>>, reply?: Nullable<FeedPostReplyRef>, embed?: Nullable<EmbedUnion>, createdAt?: Nullable<string>, via?: Nullable<string>, skyblurPostUri?: Nullable<string>): FeedPost;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedPost {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPost;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedPostReplyRef {
    constructor(root?: Nullable<RepoStrongRef>, parent?: Nullable<RepoStrongRef>);
    get root(): Nullable<RepoStrongRef>;
    set root(value: Nullable<RepoStrongRef>);
    get parent(): Nullable<RepoStrongRef>;
    set parent(value: Nullable<RepoStrongRef>);
    copy(root?: Nullable<RepoStrongRef>, parent?: Nullable<RepoStrongRef>): FeedPostReplyRef;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedPostReplyRef {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPostReplyRef;
    }
}
export declare class FeedPostgate extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, createdAt?: Nullable<string>, post?: Nullable<string>, detachedEmbeddingUris?: Nullable<KtList<string>>, embeddingRules?: Nullable<KtList<FeedPostgateEmbeddingRulesUnion>>);
    get type(): string;
    set type(value: string);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get post(): Nullable<string>;
    set post(value: Nullable<string>);
    get detachedEmbeddingUris(): Nullable<KtList<string>>;
    set detachedEmbeddingUris(value: Nullable<KtList<string>>);
    get embeddingRules(): Nullable<KtList<FeedPostgateEmbeddingRulesUnion>>;
    set embeddingRules(value: Nullable<KtList<FeedPostgateEmbeddingRulesUnion>>);
    copy(type?: string, createdAt?: Nullable<string>, post?: Nullable<string>, detachedEmbeddingUris?: Nullable<KtList<string>>, embeddingRules?: Nullable<KtList<FeedPostgateEmbeddingRulesUnion>>): FeedPostgate;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedPostgate {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPostgate;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedPostgateDisableRule extends FeedPostgateEmbeddingRulesUnion.$metadata$.constructor {
    constructor(type?: string);
    get type(): string;
    set type(value: string);
    copy(type?: string): FeedPostgateDisableRule;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedPostgateDisableRule {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPostgateDisableRule;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare abstract class FeedPostgateEmbeddingRulesUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asPostgateDisableRule(): Nullable<FeedPostgateDisableRule>;
}
export declare namespace FeedPostgateEmbeddingRulesUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedPostgateEmbeddingRulesUnion;
    }
}
export declare class FeedRepost extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, subject?: Nullable<RepoStrongRef>, createdAt?: Nullable<string>, via?: Nullable<RepoStrongRef>);
    get type(): string;
    set type(value: string);
    get subject(): Nullable<RepoStrongRef>;
    set subject(value: Nullable<RepoStrongRef>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get via(): Nullable<RepoStrongRef>;
    copy(type?: string, subject?: Nullable<RepoStrongRef>, createdAt?: Nullable<string>, via?: Nullable<RepoStrongRef>): FeedRepost;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedRepost {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedRepost;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedThreadgate extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, createdAt?: Nullable<string>, post?: Nullable<string>, allow?: Nullable<KtList<FeedThreadgateAllowUnion>>);
    get type(): string;
    set type(value: string);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    get post(): Nullable<string>;
    set post(value: Nullable<string>);
    get allow(): Nullable<KtList<FeedThreadgateAllowUnion>>;
    set allow(value: Nullable<KtList<FeedThreadgateAllowUnion>>);
    copy(type?: string, createdAt?: Nullable<string>, post?: Nullable<string>, allow?: Nullable<KtList<FeedThreadgateAllowUnion>>): FeedThreadgate;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedThreadgate {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedThreadgate;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare abstract class FeedThreadgateAllowUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asThreadgateMentionRule(): Nullable<FeedThreadgateMentionRule>;
    get asThreadgateFollowingRule(): Nullable<FeedThreadgateFollowingRule>;
    get asThreadgateFollowerRule(): Nullable<FeedThreadgateFollowerRule>;
    get asThreadgateListRule(): Nullable<FeedThreadgateListRule>;
}
export declare namespace FeedThreadgateAllowUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedThreadgateAllowUnion;
    }
}
export declare class FeedThreadgateFollowerRule extends FeedThreadgateAllowUnion.$metadata$.constructor {
    constructor(type?: string);
    get type(): string;
    set type(value: string);
    copy(type?: string): FeedThreadgateFollowerRule;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedThreadgateFollowerRule {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedThreadgateFollowerRule;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedThreadgateFollowingRule extends FeedThreadgateAllowUnion.$metadata$.constructor {
    constructor(type?: string);
    get type(): string;
    set type(value: string);
    copy(type?: string): FeedThreadgateFollowingRule;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedThreadgateFollowingRule {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedThreadgateFollowingRule;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedThreadgateListRule extends FeedThreadgateAllowUnion.$metadata$.constructor {
    constructor(type?: string, list?: string);
    get type(): string;
    set type(value: string);
    get list(): string;
    set list(value: string);
    copy(type?: string, list?: string): FeedThreadgateListRule;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedThreadgateListRule {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedThreadgateListRule;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class FeedThreadgateMentionRule extends FeedThreadgateAllowUnion.$metadata$.constructor {
    constructor(type?: string);
    get type(): string;
    set type(value: string);
    copy(type?: string): FeedThreadgateMentionRule;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace FeedThreadgateMentionRule {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FeedThreadgateMentionRule;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphBlock extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, subject?: Nullable<string>, createdAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get subject(): Nullable<string>;
    set subject(value: Nullable<string>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    copy(type?: string, subject?: Nullable<string>, createdAt?: Nullable<string>): GraphBlock;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphBlock {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphBlock;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphDefsListItemView {
    constructor(type?: string, uri?: Nullable<string>, subject?: Nullable<ActorDefsProfileView>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get subject(): Nullable<ActorDefsProfileView>;
    set subject(value: Nullable<ActorDefsProfileView>);
    copy(type?: string, uri?: Nullable<string>, subject?: Nullable<ActorDefsProfileView>): GraphDefsListItemView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphDefsListItemView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDefsListItemView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphDefsListView extends EmbedRecordViewUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, creator?: Nullable<ActorDefsProfileView>, name?: Nullable<string>, purpose?: Nullable<string>, description?: Nullable<string>, descriptionFacets?: KtList<RichtextFacet>, avatar?: Nullable<string>, viewer?: Nullable<GraphDefsListViewerState>, indexedAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get creator(): Nullable<ActorDefsProfileView>;
    set creator(value: Nullable<ActorDefsProfileView>);
    get name(): Nullable<string>;
    set name(value: Nullable<string>);
    get purpose(): Nullable<string>;
    set purpose(value: Nullable<string>);
    get description(): Nullable<string>;
    set description(value: Nullable<string>);
    get descriptionFacets(): KtList<RichtextFacet>;
    set descriptionFacets(value: KtList<RichtextFacet>);
    get avatar(): Nullable<string>;
    set avatar(value: Nullable<string>);
    get viewer(): Nullable<GraphDefsListViewerState>;
    set viewer(value: Nullable<GraphDefsListViewerState>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    copy(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, creator?: Nullable<ActorDefsProfileView>, name?: Nullable<string>, purpose?: Nullable<string>, description?: Nullable<string>, descriptionFacets?: KtList<RichtextFacet>, avatar?: Nullable<string>, viewer?: Nullable<GraphDefsListViewerState>, indexedAt?: Nullable<string>): GraphDefsListView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphDefsListView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDefsListView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphDefsListViewBasic {
    constructor(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, name?: Nullable<string>, purpose?: Nullable<string>, avatar?: Nullable<string>, viewer?: Nullable<GraphDefsListViewerState>, indexedAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get name(): Nullable<string>;
    set name(value: Nullable<string>);
    get purpose(): Nullable<string>;
    set purpose(value: Nullable<string>);
    get avatar(): Nullable<string>;
    set avatar(value: Nullable<string>);
    get viewer(): Nullable<GraphDefsListViewerState>;
    set viewer(value: Nullable<GraphDefsListViewerState>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    copy(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, name?: Nullable<string>, purpose?: Nullable<string>, avatar?: Nullable<string>, viewer?: Nullable<GraphDefsListViewerState>, indexedAt?: Nullable<string>): GraphDefsListViewBasic;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphDefsListViewBasic {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDefsListViewBasic;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphDefsListViewerState {
    constructor(repost?: Nullable<string>, like?: Nullable<string>, replyDisabled?: Nullable<boolean>);
    get repost(): Nullable<string>;
    set repost(value: Nullable<string>);
    get like(): Nullable<string>;
    set like(value: Nullable<string>);
    get replyDisabled(): Nullable<boolean>;
    set replyDisabled(value: Nullable<boolean>);
    copy(repost?: Nullable<string>, like?: Nullable<string>, replyDisabled?: Nullable<boolean>): GraphDefsListViewerState;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphDefsListViewerState {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDefsListViewerState;
    }
}
export declare class GraphDefsStarterPackView {
    constructor(uri: string, cid: string, record: RecordUnion, creator: ActorDefsProfileViewBasic, list: Nullable<GraphDefsListViewBasic> | undefined, listItemsSample: Nullable<KtList<GraphDefsListItemView>> | undefined, feeds: Nullable<KtList<FeedDefsGeneratorView>> | undefined, joinedWeekCount: Nullable<number> | undefined, joinedAllTimeCount: Nullable<number> | undefined, labels: Nullable<KtList<LabelDefsLabel>> | undefined, indexedAt: string);
    get uri(): string;
    get cid(): string;
    get record(): RecordUnion;
    get creator(): ActorDefsProfileViewBasic;
    get list(): Nullable<GraphDefsListViewBasic>;
    get listItemsSample(): Nullable<KtList<GraphDefsListItemView>>;
    get feeds(): Nullable<KtList<FeedDefsGeneratorView>>;
    get joinedWeekCount(): Nullable<number>;
    get joinedAllTimeCount(): Nullable<number>;
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    get indexedAt(): string;
    copy(uri?: string, cid?: string, record?: RecordUnion, creator?: ActorDefsProfileViewBasic, list?: Nullable<GraphDefsListViewBasic>, listItemsSample?: Nullable<KtList<GraphDefsListItemView>>, feeds?: Nullable<KtList<FeedDefsGeneratorView>>, joinedWeekCount?: Nullable<number>, joinedAllTimeCount?: Nullable<number>, labels?: Nullable<KtList<LabelDefsLabel>>, indexedAt?: string): GraphDefsStarterPackView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphDefsStarterPackView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDefsStarterPackView;
    }
}
export declare class GraphDefsStarterPackViewBasic extends EmbedRecordViewUnion.$metadata$.constructor {
    constructor(type: string | undefined, uri: string, cid: string, record: RecordUnion, creator: ActorDefsProfileViewBasic, listItemCount: Nullable<number> | undefined, joinedWeekCount: Nullable<number> | undefined, joinedAllTimeCount: Nullable<number> | undefined, labels: Nullable<KtList<LabelDefsLabel>> | undefined, indexedAt: string);
    get type(): string;
    set type(value: string);
    get uri(): string;
    get cid(): string;
    get record(): RecordUnion;
    get creator(): ActorDefsProfileViewBasic;
    get listItemCount(): Nullable<number>;
    get joinedWeekCount(): Nullable<number>;
    get joinedAllTimeCount(): Nullable<number>;
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    get indexedAt(): string;
    copy(type?: string, uri?: string, cid?: string, record?: RecordUnion, creator?: ActorDefsProfileViewBasic, listItemCount?: Nullable<number>, joinedWeekCount?: Nullable<number>, joinedAllTimeCount?: Nullable<number>, labels?: Nullable<KtList<LabelDefsLabel>>, indexedAt?: string): GraphDefsStarterPackViewBasic;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphDefsStarterPackViewBasic {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphDefsStarterPackViewBasic;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphFollow extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, subject?: Nullable<string>, createdAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get subject(): Nullable<string>;
    set subject(value: Nullable<string>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    copy(type?: string, subject?: Nullable<string>, createdAt?: Nullable<string>): GraphFollow;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphFollow {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphFollow;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphList extends RecordUnion.$metadata$.constructor {
    constructor(purpose?: Nullable<string>, name?: Nullable<string>, description?: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, avatar?: Nullable<Blob>, labels?: Nullable<LabelDefsSelfLabels>, createdAt?: Nullable<string>);
    get purpose(): Nullable<string>;
    get name(): Nullable<string>;
    get description(): Nullable<string>;
    get descriptionFacets(): Nullable<KtList<RichtextFacet>>;
    get avatar(): Nullable<Blob>;
    get labels(): Nullable<LabelDefsSelfLabels>;
    set labels(value: Nullable<LabelDefsSelfLabels>);
    get createdAt(): Nullable<string>;
    get type(): string;
    set type(value: string);
    copy(purpose?: Nullable<string>, name?: Nullable<string>, description?: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, avatar?: Nullable<Blob>, labels?: Nullable<LabelDefsSelfLabels>, createdAt?: Nullable<string>): GraphList;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphList {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphList;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphListItem extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, subject?: Nullable<string>, list?: Nullable<string>, createdAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get subject(): Nullable<string>;
    set subject(value: Nullable<string>);
    get list(): Nullable<string>;
    set list(value: Nullable<string>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    copy(type?: string, subject?: Nullable<string>, list?: Nullable<string>, createdAt?: Nullable<string>): GraphListItem;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphListItem {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphListItem;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphStarterPack extends RecordUnion.$metadata$.constructor {
    constructor(type?: string, name?: Nullable<string>, description?: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, list?: Nullable<string>, feeds?: Nullable<KtList<GraphStarterPackFeedItem>>, createdAt?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get name(): Nullable<string>;
    set name(value: Nullable<string>);
    get description(): Nullable<string>;
    set description(value: Nullable<string>);
    get descriptionFacets(): Nullable<KtList<RichtextFacet>>;
    set descriptionFacets(value: Nullable<KtList<RichtextFacet>>);
    get list(): Nullable<string>;
    set list(value: Nullable<string>);
    get feeds(): Nullable<KtList<GraphStarterPackFeedItem>>;
    set feeds(value: Nullable<KtList<GraphStarterPackFeedItem>>);
    get createdAt(): Nullable<string>;
    set createdAt(value: Nullable<string>);
    copy(type?: string, name?: Nullable<string>, description?: Nullable<string>, descriptionFacets?: Nullable<KtList<RichtextFacet>>, list?: Nullable<string>, feeds?: Nullable<KtList<GraphStarterPackFeedItem>>, createdAt?: Nullable<string>): GraphStarterPack;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphStarterPack {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphStarterPack;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class GraphStarterPackFeedItem {
    constructor(uri: string);
    get uri(): string;
    set uri(value: string);
    copy(uri?: string): GraphStarterPackFeedItem;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace GraphStarterPackFeedItem {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => GraphStarterPackFeedItem;
    }
}
export declare class LabelerPolicies {
    constructor(labelValues?: KtList<string>, labelValueDefinitions?: KtList<LabelDefsLabelValueDefinition>);
    get labelValues(): KtList<string>;
    set labelValues(value: KtList<string>);
    get labelValueDefinitions(): KtList<LabelDefsLabelValueDefinition>;
    set labelValueDefinitions(value: KtList<LabelDefsLabelValueDefinition>);
    copy(labelValues?: KtList<string>, labelValueDefinitions?: KtList<LabelDefsLabelValueDefinition>): LabelerPolicies;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelerPolicies {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelerPolicies;
    }
}
export declare class LabelerView extends LabelerViewUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, creator?: Nullable<ActorDefsProfileView>, likeCount?: Nullable<number>, viewer?: Nullable<LabelerViewerState>, indexedAt?: Nullable<string>, labels?: Nullable<KtList<LabelDefsLabel>>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get creator(): Nullable<ActorDefsProfileView>;
    set creator(value: Nullable<ActorDefsProfileView>);
    get likeCount(): Nullable<number>;
    set likeCount(value: Nullable<number>);
    get viewer(): Nullable<LabelerViewerState>;
    set viewer(value: Nullable<LabelerViewerState>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    set labels(value: Nullable<KtList<LabelDefsLabel>>);
    copy(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, creator?: Nullable<ActorDefsProfileView>, likeCount?: Nullable<number>, viewer?: Nullable<LabelerViewerState>, indexedAt?: Nullable<string>, labels?: Nullable<KtList<LabelDefsLabel>>): LabelerView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelerView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelerView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class LabelerViewDetailed extends LabelerViewUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, creator?: Nullable<ActorDefsProfileView>, policies?: Nullable<LabelerPolicies>, likeCount?: Nullable<number>, viewer?: Nullable<LabelerViewerState>, indexedAt?: Nullable<string>, labels?: Nullable<KtList<LabelDefsLabel>>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get creator(): Nullable<ActorDefsProfileView>;
    set creator(value: Nullable<ActorDefsProfileView>);
    get policies(): Nullable<LabelerPolicies>;
    set policies(value: Nullable<LabelerPolicies>);
    get likeCount(): Nullable<number>;
    set likeCount(value: Nullable<number>);
    get viewer(): Nullable<LabelerViewerState>;
    set viewer(value: Nullable<LabelerViewerState>);
    get indexedAt(): Nullable<string>;
    set indexedAt(value: Nullable<string>);
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    set labels(value: Nullable<KtList<LabelDefsLabel>>);
    copy(type?: string, uri?: Nullable<string>, cid?: Nullable<string>, creator?: Nullable<ActorDefsProfileView>, policies?: Nullable<LabelerPolicies>, likeCount?: Nullable<number>, viewer?: Nullable<LabelerViewerState>, indexedAt?: Nullable<string>, labels?: Nullable<KtList<LabelDefsLabel>>): LabelerViewDetailed;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelerViewDetailed {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelerViewDetailed;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare abstract class LabelerViewUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asLabelerView(): Nullable<LabelerView>;
    get asLabelerViewDetailed(): Nullable<LabelerViewDetailed>;
}
export declare namespace LabelerViewUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelerViewUnion;
    }
}
export declare class LabelerViewerState {
    constructor(like?: Nullable<string>);
    get like(): Nullable<string>;
    set like(value: Nullable<string>);
    copy(like?: Nullable<string>): LabelerViewerState;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelerViewerState {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelerViewerState;
    }
}
export declare class NotificationListNotificationsNotification {
    constructor(uri?: string, cid?: string, author?: ActorDefsProfileView, reason?: string, reasonSubject?: Nullable<string>, record?: Nullable<RecordUnion>, isRead?: boolean, indexedAt?: string);
    get uri(): string;
    set uri(value: string);
    get cid(): string;
    set cid(value: string);
    get author(): ActorDefsProfileView;
    set author(value: ActorDefsProfileView);
    get reason(): string;
    set reason(value: string);
    get reasonSubject(): Nullable<string>;
    set reasonSubject(value: Nullable<string>);
    get record(): Nullable<RecordUnion>;
    set record(value: Nullable<RecordUnion>);
    get isRead(): boolean;
    set isRead(value: boolean);
    get indexedAt(): string;
    set indexedAt(value: string);
    copy(uri?: string, cid?: string, author?: ActorDefsProfileView, reason?: string, reasonSubject?: Nullable<string>, record?: Nullable<RecordUnion>, isRead?: boolean, indexedAt?: string): NotificationListNotificationsNotification;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace NotificationListNotificationsNotification {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NotificationListNotificationsNotification;
    }
}
export declare class RichtextFacet {
    constructor(type?: string, index?: Nullable<RichtextFacetByteSlice>, features?: Nullable<KtMutableList<RichtextFacetFeatureUnion>>);
    get type(): string;
    get index(): Nullable<RichtextFacetByteSlice>;
    set index(value: Nullable<RichtextFacetByteSlice>);
    get features(): Nullable<KtMutableList<RichtextFacetFeatureUnion>>;
    set features(value: Nullable<KtMutableList<RichtextFacetFeatureUnion>>);
    copy(type?: string, index?: Nullable<RichtextFacetByteSlice>, features?: Nullable<KtMutableList<RichtextFacetFeatureUnion>>): RichtextFacet;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RichtextFacet {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RichtextFacet;
    }
}
export declare class RichtextFacetByteSlice {
    constructor(byteStart?: Nullable<number>, byteEnd?: Nullable<number>);
    get byteStart(): Nullable<number>;
    set byteStart(value: Nullable<number>);
    get byteEnd(): Nullable<number>;
    set byteEnd(value: Nullable<number>);
    copy(byteStart?: Nullable<number>, byteEnd?: Nullable<number>): RichtextFacetByteSlice;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RichtextFacetByteSlice {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RichtextFacetByteSlice;
    }
}
export declare abstract class RichtextFacetFeatureUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asLink(): Nullable<RichtextFacetLink>;
    get asMention(): Nullable<RichtextFacetMention>;
    get asTag(): Nullable<RichtextFacetTag>;
}
export declare namespace RichtextFacetFeatureUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RichtextFacetFeatureUnion;
    }
}
export declare class RichtextFacetLink extends RichtextFacetFeatureUnion.$metadata$.constructor {
    constructor(type?: string, uri?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    copy(type?: string, uri?: Nullable<string>): RichtextFacetLink;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RichtextFacetLink {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RichtextFacetLink;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class RichtextFacetMention extends RichtextFacetFeatureUnion.$metadata$.constructor {
    constructor(type?: string, did?: Nullable<string>);
    get type(): string;
    set type(value: string);
    get did(): Nullable<string>;
    set did(value: Nullable<string>);
    copy(type?: string, did?: Nullable<string>): RichtextFacetMention;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RichtextFacetMention {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RichtextFacetMention;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class RichtextFacetTag extends RichtextFacetFeatureUnion.$metadata$.constructor {
    constructor(type?: string, tag?: string);
    get type(): string;
    set type(value: string);
    get tag(): string;
    set tag(value: string);
    copy(type?: string, tag?: string): RichtextFacetTag;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RichtextFacetTag {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RichtextFacetTag;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class UndocSearchFeedsPost {
    constructor(createdAt?: Nullable<bigint>, text?: Nullable<string>, user?: Nullable<string>);
    get createdAt(): Nullable<bigint>;
    set createdAt(value: Nullable<bigint>);
    get text(): Nullable<string>;
    set text(value: Nullable<string>);
    get user(): Nullable<string>;
    set user(value: Nullable<string>);
    copy(createdAt?: Nullable<bigint>, text?: Nullable<string>, user?: Nullable<string>): UndocSearchFeedsPost;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace UndocSearchFeedsPost {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UndocSearchFeedsPost;
    }
}
export declare class UndocSearchFeedsUser {
    constructor(did?: Nullable<string>, handle?: Nullable<string>);
    get did(): Nullable<string>;
    set did(value: Nullable<string>);
    get handle(): Nullable<string>;
    set handle(value: Nullable<string>);
    copy(did?: Nullable<string>, handle?: Nullable<string>): UndocSearchFeedsUser;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace UndocSearchFeedsUser {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UndocSearchFeedsUser;
    }
}
export declare class JobStatus {
    constructor(jobId: string, did: string, state: string, progress?: Nullable<number>, blob?: Nullable<Blob>, error?: Nullable<string>, message?: Nullable<string>);
    get jobId(): string;
    get did(): string;
    get state(): string;
    get progress(): Nullable<number>;
    get blob(): Nullable<Blob>;
    get error(): Nullable<string>;
    get message(): Nullable<string>;
    copy(jobId?: string, did?: string, state?: string, progress?: Nullable<number>, blob?: Nullable<Blob>, error?: Nullable<string>, message?: Nullable<string>): JobStatus;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace JobStatus {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => JobStatus;
    }
}
export declare class ChatActorDefsProfileViewBasic {
    constructor(did?: string, handle?: string, displayName?: Nullable<string>, avatar?: Nullable<string>, associated?: Nullable<ActorDefsProfileAssociated>, viewer?: Nullable<ActorDefsViewerState>, labels?: Nullable<KtList<LabelDefsLabel>>, chatDisabled?: boolean, verification?: Nullable<ActorDefsVerificationState>);
    get did(): string;
    set did(value: string);
    get handle(): string;
    set handle(value: string);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get avatar(): Nullable<string>;
    set avatar(value: Nullable<string>);
    get associated(): Nullable<ActorDefsProfileAssociated>;
    set associated(value: Nullable<ActorDefsProfileAssociated>);
    get viewer(): Nullable<ActorDefsViewerState>;
    set viewer(value: Nullable<ActorDefsViewerState>);
    get labels(): Nullable<KtList<LabelDefsLabel>>;
    set labels(value: Nullable<KtList<LabelDefsLabel>>);
    get chatDisabled(): boolean;
    set chatDisabled(value: boolean);
    get verification(): Nullable<ActorDefsVerificationState>;
    set verification(value: Nullable<ActorDefsVerificationState>);
    copy(did?: string, handle?: string, displayName?: Nullable<string>, avatar?: Nullable<string>, associated?: Nullable<ActorDefsProfileAssociated>, viewer?: Nullable<ActorDefsViewerState>, labels?: Nullable<KtList<LabelDefsLabel>>, chatDisabled?: boolean, verification?: Nullable<ActorDefsVerificationState>): ChatActorDefsProfileViewBasic;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ChatActorDefsProfileViewBasic {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ChatActorDefsProfileViewBasic;
    }
}
export declare class ConvoDefsConvoView {
    constructor(id: string, rev: string, members: KtList<ChatActorDefsProfileViewBasic>, lastMessage?: Nullable<ConvoDefsMessageUnion>, lastReaction?: Nullable<ConvoDefsMessageAndReactionView>, muted?: boolean, unreadCount?: number);
    get id(): string;
    get rev(): string;
    get members(): KtList<ChatActorDefsProfileViewBasic>;
    get lastMessage(): Nullable<ConvoDefsMessageUnion>;
    get lastReaction(): Nullable<ConvoDefsMessageAndReactionView>;
    get muted(): boolean;
    get unreadCount(): number;
    copy(id?: string, rev?: string, members?: KtList<ChatActorDefsProfileViewBasic>, lastMessage?: Nullable<ConvoDefsMessageUnion>, lastReaction?: Nullable<ConvoDefsMessageAndReactionView>, muted?: boolean, unreadCount?: number): ConvoDefsConvoView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsConvoView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsConvoView;
    }
}
export declare class ConvoDefsDeletedMessageView extends ConvoDefsMessageUnion.$metadata$.constructor {
    constructor(type: string | undefined, id: string, rev: string, sender: ConvoDefsMessageViewSender, sentAt: string);
    get type(): string;
    set type(value: string);
    get id(): string;
    set id(value: string);
    get rev(): string;
    set rev(value: string);
    get sender(): ConvoDefsMessageViewSender;
    set sender(value: ConvoDefsMessageViewSender);
    get sentAt(): string;
    set sentAt(value: string);
    copy(type?: string, id?: string, rev?: string, sender?: ConvoDefsMessageViewSender, sentAt?: string): ConvoDefsDeletedMessageView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsDeletedMessageView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsDeletedMessageView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsLogAddReaction extends ConvoDefsLogUnion.$metadata$.constructor {
    constructor(type: string | undefined, rev: string, convoId: string, message: ConvoDefsMessageUnion, reaction: ConvoDefsReactionView);
    get type(): string;
    get rev(): string;
    get convoId(): string;
    get message(): ConvoDefsMessageUnion;
    get reaction(): ConvoDefsReactionView;
    copy(type?: string, rev?: string, convoId?: string, message?: ConvoDefsMessageUnion, reaction?: ConvoDefsReactionView): ConvoDefsLogAddReaction;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsLogAddReaction {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsLogAddReaction;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsLogBeginConvo extends ConvoDefsLogUnion.$metadata$.constructor {
    constructor(type: string | undefined, rev: string, convoId: string);
    get type(): string;
    set type(value: string);
    get rev(): string;
    set rev(value: string);
    get convoId(): string;
    set convoId(value: string);
    copy(type?: string, rev?: string, convoId?: string): ConvoDefsLogBeginConvo;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsLogBeginConvo {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsLogBeginConvo;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsLogCreateMessage extends ConvoDefsLogUnion.$metadata$.constructor {
    constructor(type: string | undefined, rev: string, convoId: string, message: ConvoDefsMessageUnion);
    get type(): string;
    set type(value: string);
    get rev(): string;
    set rev(value: string);
    get convoId(): string;
    set convoId(value: string);
    get message(): ConvoDefsMessageUnion;
    set message(value: ConvoDefsMessageUnion);
    copy(type?: string, rev?: string, convoId?: string, message?: ConvoDefsMessageUnion): ConvoDefsLogCreateMessage;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsLogCreateMessage {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsLogCreateMessage;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsLogDeleteMessage extends ConvoDefsLogUnion.$metadata$.constructor {
    constructor(type: string | undefined, rev: string, convoId: string, message: ConvoDefsMessageUnion);
    get type(): string;
    set type(value: string);
    get rev(): string;
    set rev(value: string);
    get convoId(): string;
    set convoId(value: string);
    get message(): ConvoDefsMessageUnion;
    set message(value: ConvoDefsMessageUnion);
    copy(type?: string, rev?: string, convoId?: string, message?: ConvoDefsMessageUnion): ConvoDefsLogDeleteMessage;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsLogDeleteMessage {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsLogDeleteMessage;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsLogLeaveConvo extends ConvoDefsLogUnion.$metadata$.constructor {
    constructor(type: string | undefined, rev: string, convoId: string);
    get type(): string;
    set type(value: string);
    get rev(): string;
    set rev(value: string);
    get convoId(): string;
    set convoId(value: string);
    copy(type?: string, rev?: string, convoId?: string): ConvoDefsLogLeaveConvo;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsLogLeaveConvo {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsLogLeaveConvo;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsLogReadMessage extends ConvoDefsLogUnion.$metadata$.constructor {
    constructor(type: string | undefined, rev: string, convoId: string, message: ConvoDefsMessageUnion);
    get type(): string;
    set type(value: string);
    get rev(): string;
    set rev(value: string);
    get convoId(): string;
    set convoId(value: string);
    get message(): ConvoDefsMessageUnion;
    set message(value: ConvoDefsMessageUnion);
    copy(type?: string, rev?: string, convoId?: string, message?: ConvoDefsMessageUnion): ConvoDefsLogReadMessage;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsLogReadMessage {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsLogReadMessage;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsLogRemoveReaction extends ConvoDefsLogUnion.$metadata$.constructor {
    constructor(type: string | undefined, rev: string, convoId: string, message: ConvoDefsMessageUnion, reaction: ConvoDefsReactionView);
    get type(): string;
    get rev(): string;
    get convoId(): string;
    get message(): ConvoDefsMessageUnion;
    get reaction(): ConvoDefsReactionView;
    copy(type?: string, rev?: string, convoId?: string, message?: ConvoDefsMessageUnion, reaction?: ConvoDefsReactionView): ConvoDefsLogRemoveReaction;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsLogRemoveReaction {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsLogRemoveReaction;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare abstract class ConvoDefsLogUnion {
    constructor();
    abstract get type(): string;
    get asBeginConvo(): Nullable<ConvoDefsLogBeginConvo>;
    get asLeaveConvo(): Nullable<ConvoDefsLogLeaveConvo>;
    get asCreateMessage(): Nullable<ConvoDefsLogCreateMessage>;
    get asDeleteMessage(): Nullable<ConvoDefsLogDeleteMessage>;
    get asReadMessage(): Nullable<ConvoDefsLogReadMessage>;
    get asAddReaction(): Nullable<ConvoDefsLogAddReaction>;
    get asRemoveReaction(): Nullable<ConvoDefsLogRemoveReaction>;
}
export declare namespace ConvoDefsLogUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsLogUnion;
    }
}
export declare class ConvoDefsMessageAndReactionView {
    constructor(type: string | undefined, message: ConvoDefsMessageView, reaction: ConvoDefsReactionView);
    get type(): string;
    get message(): ConvoDefsMessageView;
    get reaction(): ConvoDefsReactionView;
    copy(type?: string, message?: ConvoDefsMessageView, reaction?: ConvoDefsReactionView): ConvoDefsMessageAndReactionView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsMessageAndReactionView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsMessageAndReactionView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsMessageInput {
    constructor(text: string, facets?: Nullable<KtList<RichtextFacet>>, embed?: Nullable<EmbedUnion>);
    get text(): string;
    set text(value: string);
    get facets(): Nullable<KtList<RichtextFacet>>;
    set facets(value: Nullable<KtList<RichtextFacet>>);
    get embed(): Nullable<EmbedUnion>;
    set embed(value: Nullable<EmbedUnion>);
    copy(text?: string, facets?: Nullable<KtList<RichtextFacet>>, embed?: Nullable<EmbedUnion>): ConvoDefsMessageInput;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsMessageInput {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsMessageInput;
    }
}
export declare abstract class ConvoDefsMessageUnion {
    constructor();
    abstract get type(): string;
    get asMessageView(): Nullable<ConvoDefsMessageView>;
    get asDeletedMessageView(): Nullable<ConvoDefsDeletedMessageView>;
}
export declare namespace ConvoDefsMessageUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsMessageUnion;
    }
}
export declare class ConvoDefsMessageView extends ConvoDefsMessageUnion.$metadata$.constructor {
    constructor(type: string | undefined, id: string, rev: string, text: string, facets: Nullable<KtList<RichtextFacet>> | undefined, embed: Nullable<RecordUnion> | undefined, reactions: KtList<ConvoDefsReactionView> | undefined, sender: ConvoDefsMessageViewSender, sentAt: string);
    get type(): string;
    get id(): string;
    get rev(): string;
    get text(): string;
    get facets(): Nullable<KtList<RichtextFacet>>;
    get embed(): Nullable<RecordUnion>;
    get reactions(): KtList<ConvoDefsReactionView>;
    get sender(): ConvoDefsMessageViewSender;
    get sentAt(): string;
    copy(type?: string, id?: string, rev?: string, text?: string, facets?: Nullable<KtList<RichtextFacet>>, embed?: Nullable<RecordUnion>, reactions?: KtList<ConvoDefsReactionView>, sender?: ConvoDefsMessageViewSender, sentAt?: string): ConvoDefsMessageView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsMessageView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsMessageView;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                get TYPE(): string;
                private constructor();
            }
        }
    }
}
export declare class ConvoDefsMessageViewSender {
    constructor(did: string);
    get did(): string;
    set did(value: string);
    copy(did?: string): ConvoDefsMessageViewSender;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsMessageViewSender {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsMessageViewSender;
    }
}
export declare class ConvoDefsReactionView {
    constructor(value: string, sender: ConvoDefsReactionViewSender, createdAt: string);
    get value(): string;
    get sender(): ConvoDefsReactionViewSender;
    get createdAt(): string;
    copy(value?: string, sender?: ConvoDefsReactionViewSender, createdAt?: string): ConvoDefsReactionView;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsReactionView {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsReactionView;
    }
}
export declare class ConvoDefsReactionViewSender {
    constructor(did: string);
    get did(): string;
    copy(did?: string): ConvoDefsReactionViewSender;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ConvoDefsReactionViewSender {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ConvoDefsReactionViewSender;
    }
}
export declare class LabelDefsLabel {
    constructor(src?: Nullable<string>, uri?: Nullable<string>, cid?: Nullable<string>, val?: Nullable<string>, neg?: Nullable<boolean>, cts?: Nullable<string>);
    get src(): Nullable<string>;
    set src(value: Nullable<string>);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get val(): Nullable<string>;
    set val(value: Nullable<string>);
    get neg(): Nullable<boolean>;
    set neg(value: Nullable<boolean>);
    get cts(): Nullable<string>;
    set cts(value: Nullable<string>);
    copy(src?: Nullable<string>, uri?: Nullable<string>, cid?: Nullable<string>, val?: Nullable<string>, neg?: Nullable<boolean>, cts?: Nullable<string>): LabelDefsLabel;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelDefsLabel {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelDefsLabel;
    }
}
export declare class LabelDefsLabelValueDefinition {
    constructor(identifier?: string, severity?: string, blurs?: string, defaultSetting?: string, adultOnly?: boolean, locales?: KtList<LabelDefsLabelValueDefinitionStrings>);
    get identifier(): string;
    set identifier(value: string);
    get severity(): string;
    set severity(value: string);
    get blurs(): string;
    set blurs(value: string);
    get defaultSetting(): string;
    set defaultSetting(value: string);
    get adultOnly(): boolean;
    set adultOnly(value: boolean);
    get locales(): KtList<LabelDefsLabelValueDefinitionStrings>;
    set locales(value: KtList<LabelDefsLabelValueDefinitionStrings>);
    copy(identifier?: string, severity?: string, blurs?: string, defaultSetting?: string, adultOnly?: boolean, locales?: KtList<LabelDefsLabelValueDefinitionStrings>): LabelDefsLabelValueDefinition;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelDefsLabelValueDefinition {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelDefsLabelValueDefinition;
    }
}
export declare class LabelDefsLabelValueDefinitionStrings {
    constructor(lang?: string, name?: string, description?: string);
    get lang(): string;
    set lang(value: string);
    get name(): string;
    set name(value: string);
    get description(): string;
    set description(value: string);
    copy(lang?: string, name?: string, description?: string): LabelDefsLabelValueDefinitionStrings;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelDefsLabelValueDefinitionStrings {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelDefsLabelValueDefinitionStrings;
    }
}
export declare class LabelDefsSelfLabel {
    constructor(val?: string);
    get val(): string;
    set val(value: string);
    copy(val?: string): LabelDefsSelfLabel;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelDefsSelfLabel {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelDefsSelfLabel;
    }
}
export declare class LabelDefsSelfLabels {
    constructor(type?: string, values?: KtList<LabelDefsSelfLabel>);
    get type(): string;
    set type(value: string);
    get values(): KtList<LabelDefsSelfLabel>;
    set values(value: KtList<LabelDefsSelfLabel>);
    copy(type?: string, values?: KtList<LabelDefsSelfLabel>): LabelDefsSelfLabels;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace LabelDefsSelfLabels {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LabelDefsSelfLabels;
    }
}
export declare abstract class ModerationReasonType {
    static readonly getInstance: () => typeof ModerationReasonType.$metadata$.type;
    private constructor();
}
export declare namespace ModerationReasonType {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            get SPAM(): string;
            get VIOLATION(): string;
            get MISLEADING(): string;
            get SEXUAL(): string;
            get RUDE(): string;
            get OTHER(): string;
            get APPEAL(): string;
            private constructor();
        }
    }
}
export declare class ModerationReport {
    constructor();
    get id(): Nullable<number>;
    get reasonType(): Nullable<string>;
    get reason(): Nullable<string>;
    get subject(): Nullable<ModerationSubjectUnion>;
    get reportedBy(): Nullable<string>;
    get createdAt(): Nullable<string>;
}
export declare namespace ModerationReport {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ModerationReport;
    }
}
export declare abstract class ModerationSubjectUnion {
    constructor();
    abstract get type(): string;
    get asRef(): Nullable<RepoRef>;
    get asStrongRef(): Nullable<RepoStrongRef>;
}
export declare namespace ModerationSubjectUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ModerationSubjectUnion;
    }
}
export declare class RepoListRecordsRecord {
    constructor(uri?: Nullable<string>, cid?: Nullable<string>, value?: Nullable<RecordUnion>);
    get uri(): Nullable<string>;
    set uri(value: Nullable<string>);
    get cid(): Nullable<string>;
    set cid(value: Nullable<string>);
    get value(): Nullable<RecordUnion>;
    set value(value: Nullable<RecordUnion>);
    copy(uri?: Nullable<string>, cid?: Nullable<string>, value?: Nullable<RecordUnion>): RepoListRecordsRecord;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RepoListRecordsRecord {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoListRecordsRecord;
    }
}
export declare class RepoRef extends ModerationSubjectUnion.$metadata$.constructor {
    constructor(did: string);
    get did(): string;
    get type(): string;
    copy(did?: string): RepoRef;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RepoRef {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoRef;
    }
}
export declare class RepoStrongRef extends ModerationSubjectUnion.$metadata$.constructor {
    constructor(uri?: string, cid?: string);
    get uri(): string;
    get cid(): string;
    get type(): string;
    copy(uri?: string, cid?: string): RepoStrongRef;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace RepoStrongRef {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RepoStrongRef;
    }
}
export declare abstract class DidDocUnion {
    constructor();
    get asDIDDetails(): Nullable<DIDDetails>;
}
export declare namespace DidDocUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DidDocUnion;
    }
}
export declare class DIDDetails extends DidDocUnion.$metadata$.constructor {
    constructor(id?: Nullable<string>, alsoKnownAs?: Nullable<KtList<string>>, verificationMethod?: Nullable<KtList<DIDDetailsVerificationMethod>>, service?: Nullable<KtList<DIDDetailsService>>);
    get id(): Nullable<string>;
    set id(value: Nullable<string>);
    get alsoKnownAs(): Nullable<KtList<string>>;
    set alsoKnownAs(value: Nullable<KtList<string>>);
    get verificationMethod(): Nullable<KtList<DIDDetailsVerificationMethod>>;
    set verificationMethod(value: Nullable<KtList<DIDDetailsVerificationMethod>>);
    get service(): Nullable<KtList<DIDDetailsService>>;
    set service(value: Nullable<KtList<DIDDetailsService>>);
    pdsEndpoint(): Nullable<string>;
    copy(id?: Nullable<string>, alsoKnownAs?: Nullable<KtList<string>>, verificationMethod?: Nullable<KtList<DIDDetailsVerificationMethod>>, service?: Nullable<KtList<DIDDetailsService>>): DIDDetails;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace DIDDetails {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DIDDetails;
    }
}
export declare class DIDDetailsService {
    constructor(id?: Nullable<string>, type?: Nullable<string>, serviceEndpoint?: Nullable<string>);
    get id(): Nullable<string>;
    set id(value: Nullable<string>);
    get type(): Nullable<string>;
    set type(value: Nullable<string>);
    get serviceEndpoint(): Nullable<string>;
    set serviceEndpoint(value: Nullable<string>);
    copy(id?: Nullable<string>, type?: Nullable<string>, serviceEndpoint?: Nullable<string>): DIDDetailsService;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace DIDDetailsService {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DIDDetailsService;
    }
}
export declare class DIDDetailsVerificationMethod {
    constructor(id?: Nullable<string>, type?: Nullable<string>, controller?: Nullable<string>, publicKeyMultibase?: Nullable<string>);
    get id(): Nullable<string>;
    set id(value: Nullable<string>);
    get type(): Nullable<string>;
    set type(value: Nullable<string>);
    get controller(): Nullable<string>;
    set controller(value: Nullable<string>);
    get publicKeyMultibase(): Nullable<string>;
    set publicKeyMultibase(value: Nullable<string>);
    copy(id?: Nullable<string>, type?: Nullable<string>, controller?: Nullable<string>, publicKeyMultibase?: Nullable<string>): DIDDetailsVerificationMethod;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace DIDDetailsVerificationMethod {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DIDDetailsVerificationMethod;
    }
}
export declare class DIDLog {
    constructor(sig?: Nullable<string>, prev?: Nullable<string>, type?: Nullable<string>, services?: Nullable<DIDLogService>, alsoKnownAs?: Nullable<KtList<string>>, rotationKeys?: Nullable<KtList<string>>, verificationMethods?: Nullable<DIDLogVerificationMethods>);
    get sig(): Nullable<string>;
    set sig(value: Nullable<string>);
    get prev(): Nullable<string>;
    set prev(value: Nullable<string>);
    get type(): Nullable<string>;
    set type(value: Nullable<string>);
    get services(): Nullable<DIDLogService>;
    set services(value: Nullable<DIDLogService>);
    get alsoKnownAs(): Nullable<KtList<string>>;
    set alsoKnownAs(value: Nullable<KtList<string>>);
    get rotationKeys(): Nullable<KtList<string>>;
    set rotationKeys(value: Nullable<KtList<string>>);
    get verificationMethods(): Nullable<DIDLogVerificationMethods>;
    set verificationMethods(value: Nullable<DIDLogVerificationMethods>);
    copy(sig?: Nullable<string>, prev?: Nullable<string>, type?: Nullable<string>, services?: Nullable<DIDLogService>, alsoKnownAs?: Nullable<KtList<string>>, rotationKeys?: Nullable<KtList<string>>, verificationMethods?: Nullable<DIDLogVerificationMethods>): DIDLog;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace DIDLog {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DIDLog;
    }
}
export declare class DIDLogPDS {
    constructor(type?: Nullable<string>, endpoint?: Nullable<string>);
    get type(): Nullable<string>;
    set type(value: Nullable<string>);
    get endpoint(): Nullable<string>;
    set endpoint(value: Nullable<string>);
    copy(type?: Nullable<string>, endpoint?: Nullable<string>): DIDLogPDS;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace DIDLogPDS {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DIDLogPDS;
    }
}
export declare class DIDLogService {
    constructor(atprotoPDS?: Nullable<DIDLogPDS>);
    get atprotoPDS(): Nullable<DIDLogPDS>;
    set atprotoPDS(value: Nullable<DIDLogPDS>);
    copy(atprotoPDS?: Nullable<DIDLogPDS>): DIDLogService;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace DIDLogService {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DIDLogService;
    }
}
export declare class DIDLogVerificationMethods {
    constructor(atproto?: Nullable<string>);
    get atproto(): Nullable<string>;
    set atproto(value: Nullable<string>);
    copy(atproto?: Nullable<string>): DIDLogVerificationMethods;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace DIDLogVerificationMethods {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DIDLogVerificationMethods;
    }
}
export declare class Blob {
    constructor(type?: string, ref?: Nullable<BlobRef>, mimeType?: Nullable<string>, size?: Nullable<number>);
    get type(): string;
    set type(value: string);
    get ref(): Nullable<BlobRef>;
    set ref(value: Nullable<BlobRef>);
    get mimeType(): Nullable<string>;
    set mimeType(value: Nullable<string>);
    get size(): Nullable<number>;
    set size(value: Nullable<number>);
    copy(type?: string, ref?: Nullable<BlobRef>, mimeType?: Nullable<string>, size?: Nullable<number>): Blob;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace Blob {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => Blob;
    }
}
export declare class BlobRef {
    constructor(link?: Nullable<string>);
    get link(): Nullable<string>;
    set link(value: Nullable<string>);
    copy(link?: Nullable<string>): BlobRef;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace BlobRef {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => BlobRef;
    }
}
export declare class Error {
    constructor(message?: string, error?: string);
    get message(): string;
    set message(value: string);
    get error(): string;
    set error(value: string);
    copy(message?: string, error?: string): Error;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace Error {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => Error;
    }
}
export declare abstract class RecordUnion {
    constructor();
    abstract get type(): string;
    abstract set type(value: string);
    get asActorProfile(): Nullable<ActorProfile>;
    get asGraphFollow(): Nullable<GraphFollow>;
    get asGraphBlock(): Nullable<GraphBlock>;
    get asFeedLike(): Nullable<FeedLike>;
    get asFeedPost(): Nullable<FeedPost>;
    get asFeedRepost(): Nullable<FeedRepost>;
    get asGraphListItem(): Nullable<GraphListItem>;
    get asGraphList(): Nullable<GraphList>;
    get asGraphStarterPack(): Nullable<GraphStarterPack>;
}
export declare namespace RecordUnion {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RecordUnion;
    }
}
export declare interface ATProtocolStream {
    sync(): SyncResource;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.stream.ATProtocolStream": unique symbol;
    };
}
export declare class ATProtocolStreamConfig extends ATProtocolConfig.$metadata$.constructor {
    constructor(firehoseUri?: string);
    get firehoseUri(): string;
    set firehoseUri(value: string);
    copy(firehoseUri?: string): ATProtocolStreamConfig;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export declare namespace ATProtocolStreamConfig {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ATProtocolStreamConfig;
    }
}
export declare abstract class ATProtocolStreamFactory {
    static readonly getInstance: () => typeof ATProtocolStreamFactory.$metadata$.type;
    private constructor();
}
export declare namespace ATProtocolStreamFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instanceFromUri(pdsUri: string, firehoseUri: string): ATProtocolStream;
            instanceFromConfig(config?: ATProtocolStreamConfig): ATProtocolStream;
            private constructor();
        }
    }
}
export declare interface SyncResource {
    subscribeRepos(request: SyncSubscribeReposRequest): SyncStreamClient;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kbsky.stream.api.com.atproto.SyncResource": unique symbol;
    };
}
export declare class SyncSubscribeReposRequest implements MapRequest {
    constructor(cursor?: Nullable<string>, filter?: KtList<string>);
    get cursor(): Nullable<string>;
    set cursor(value: Nullable<string>);
    get filter(): KtList<string>;
    set filter(value: KtList<string>);
    toMap(): KtMap<string, any>;
    copy(cursor?: Nullable<string>, filter?: KtList<string>): SyncSubscribeReposRequest;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    toMappedJson(): string;
    addParam(_this_: KtMutableMap<string, any>, key: string, value: Nullable<any>): void;
    readonly __doNotUseOrImplementIt: MapRequest["__doNotUseOrImplementIt"];
}
export declare namespace SyncSubscribeReposRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncSubscribeReposRequest;
    }
}
export declare class SyncStreamClient {
    constructor(atproto: ATProtocol, uri: string, filter?: KtList<string>);
    get atproto(): ATProtocol;
    get uri(): string;
    get filter(): KtList<string>;
    get client(): any/* WebsocketRequest */;
    set client(value: any/* WebsocketRequest */);
    get isOpen(): boolean;
    set isOpen(value: boolean);
    eventCallback(callback: any/* SyncEventCallback */): SyncStreamClient;
    openedCallback(callback: any/* OpenedCallback */): SyncStreamClient;
    closedCallback(callback: any/* ClosedCallback */): SyncStreamClient;
    errorCallback(callback: any/* ErrorCallback */): SyncStreamClient;
    open(): Promise<void>;
    close(): void;
}
export declare namespace SyncStreamClient {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncStreamClient;
    }
}
export declare class BskyFactory {
    constructor();
    stream(apiUri: string, streamUri: string): ATProtocolStream;
    bluesky(uri: string): Bluesky;
    atproto(uri: string): ATProtocol;
    plc(): PLCDirectory;
    plcFromUri(uri: string): PLCDirectory;
}
export declare namespace BskyFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => BskyFactory;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                getPLCDirectoryFactory(): typeof PLCDirectoryFactory.$metadata$.type;
                getATProtocolStreamFactory(): typeof ATProtocolStreamFactory.$metadata$.type;
                getATProtocolFactory(): typeof ATProtocolFactory.$metadata$.type;
                getBlueskyFactory(): typeof BlueskyFactory.$metadata$.type;
                getATProtocolTypes(): any/* typeof ATProtocolTypes.$metadata$.type */;
                getBlueSkyTypes(): any/* typeof BlueskyTypes.$metadata$.type */;
                private constructor();
            }
        }
    }
}